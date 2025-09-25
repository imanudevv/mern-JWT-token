const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const UserModel = require('./models/Users');

const app = express()



app.use(express.json())
app.use(cors({
    origin: ["http://127.0.0.1:5173", "http://localhost:5173"],
    methods: ["GET", "POST"],
    credentials: true
}));
app.use(cookieParser());




mongoose.connect("mongodb://127.0.0.1:27017/JWT")
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB", err);
    });




app.post("/login", (req, res) => {
    const { email, password } = req.body;
    UserModel.findOne({ email: email })
        .then(user => {
            if (!user) return res.status(404).json({ error: "No record found" });

            bcrypt.compare(password, user.password, (err, response) => {
                if (!response) return res.status(401).json({ error: "Incorrect Password" });

                const token = jwt.sign(
                    { email: user.email, role: user.role },
                    "jwt-secret-key",
                    { expiresIn: "1d" }
                );

                res.cookie("token", token, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV === "production",
                    sameSite: "strict",
                });

                return res.json({ status: "Success", role: user.role })
            });
        })
        .catch(err => res.status(500).json({ error: "Internal server error" }));
});




// Midleware to verify JWT token
const verifyUser = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ error: "Token is missing" });
    }
    jwt.verify(token, "jwt-secret-key", (err, decoded) => {
        if (err) {
            return res.status(403).json({ error: "Invalid or expired token" });
        }
        if (decoded.role !== "admin") {
            return res.status(403).json({ error: "Access denied. Not an admin." });
        }
        req.user = decoded;
        next();
    })
};

app.get("/dashboard", verifyUser, (req, res) => {
    res.json("Success");
});





app.post('/register', (req, res) => {
    const { name, email, password } = req.body;
    bcrypt.hash(password, 10)
        //10 means bcrypt will apply the hashing
        //  algorithm 2¹⁰ = 1024 rounds of processing before producing the final hash.

        .then(hash => {
            UserModel.create({ name, email, password: hash, role: "user" })  //Default role 
                .then(user => res.json({ status: "Success" }))
                .catch(err => res.status(500).json({ error: "Error creating user" }));
        })
        .catch(err => res.status(500).json({ error: "password hashing failed" }));

});





app.listen(3001, () => {
    console.log("Server is running on port 3001");
})