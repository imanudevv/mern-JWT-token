import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    axios.defaults.withCredentials = true;

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:3001/login", { email, password })
            .then((res) => {
                if (res.data.status === "Success") {
                    if (res.data.role === "admin") {
                        navigate("/dashboard");
                    } else {
                        navigate("/home");
                    }
                }
            })
            .catch((err) => console.log(err));
    };

    return (
        <div
            className="min-vh-100 d-flex align-items-center justify-content-center"
            style={{
                background: "linear-gradient(135deg, #ff6a00 0%, #ee0979 100%)",
                overflow: "hidden",
                position: "relative",
                padding: "20px",
            }}
        >
            {/* Floating circles for animated background */}
            <div
                style={{
                    position: "absolute",
                    width: "200px",
                    height: "200px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.15)",
                    top: "10%",
                    left: "15%",
                    animation: "float 6s ease-in-out infinite",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    width: "300px",
                    height: "300px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.1)",
                    bottom: "10%",
                    right: "10%",
                    animation: "float 8s ease-in-out infinite reverse",
                }}
            />

            <div
                className="card shadow-lg border-0"
                style={{
                    maxWidth: "420px",
                    width: "100%",
                    borderRadius: "20px",
                    backdropFilter: "blur(15px)",
                    background: "rgba(255, 255, 255, 0.85)",
                    animation: "fadeInUp 0.8s ease",
                }}
            >
                <div className="card-body p-5">
                    <div className="text-center mb-4">
                        <h2
                            className="fw-bold"
                            style={{
                                background: "linear-gradient(90deg,#ff6a00,#ee0979)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Welcome Back
                        </h2>
                        <p className="text-muted">Sign in to continue</p>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="form-floating mb-4">
                            <input
                                type="email"
                                className="form-control"
                                id="floatingEmail"
                                placeholder="Email"
                                style={{
                                    borderRadius: "12px",
                                    padding: "14px",
                                    border: "1px solid #ddd",
                                }}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <label htmlFor="floatingEmail">Email Address</label>
                        </div>

                        <div className="form-floating mb-4">
                            <input
                                type="password"
                                className="form-control"
                                id="floatingPassword"
                                placeholder="Password"
                                style={{
                                    borderRadius: "12px",
                                    padding: "14px",
                                    border: "1px solid #ddd",
                                }}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <label htmlFor="floatingPassword">Password</label>
                        </div>

                        <button
                            type="submit"
                            className="btn btn-lg w-100 fw-semibold"
                            style={{
                                borderRadius: "12px",
                                padding: "14px",
                                background: "linear-gradient(90deg, #ff6a00 0%, #ee0979 100%)",
                                border: "none",
                                color: "#fff",
                                boxShadow: "0 4px 10px rgba(238,9,121,0.3)",
                                transition: "all 0.3s ease",
                            }}
                            onMouseOver={(e) => {
                                e.target.style.transform = "translateY(-2px)";
                                e.target.style.boxShadow = "0 6px 14px rgba(238,9,121,0.4)";
                                e.target.style.background =
                                    "linear-gradient(90deg, #e65c00 0%, #d10068 100%)";
                            }}
                            onMouseOut={(e) => {
                                e.target.style.transform = "translateY(0)";
                                e.target.style.boxShadow = "0 4px 10px rgba(238,9,121,0.3)";
                                e.target.style.background =
                                    "linear-gradient(90deg, #ff6a00 0%, #ee0979 100%)";
                            }}
                        >
                            Sign In
                        </button>
                    </form>

                    <div className="text-center mt-4">
                        <p className="text-muted mb-1">Don't have an account?</p>
                        <Link
                            to="/signup"
                            className="btn btn-outline-dark w-100 fw-semibold"
                            style={{
                                borderRadius: "12px",
                                padding: "14px",
                                transition: "all 0.3s ease",
                            }}
                            onMouseOver={(e) => {
                                e.target.style.background = "rgba(0,0,0,0.05)";
                            }}
                            onMouseOut={(e) => {
                                e.target.style.background = "transparent";
                            }}
                        >
                            Create Account
                        </Link>
                    </div>
                </div>
            </div>

            {/* Animations keyframes */}
            <style>
                {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0px); }
          }
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
            </style>
        </div>
    );
};

export default Login;