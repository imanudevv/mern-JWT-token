import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignUP = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/register", { name, email, password })
      .then(() => {
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div
      className="min-vh-100 d-flex align-items-center justify-content-center animated-bg"
      style={{ padding: "20px", position: "relative", overflow: "hidden" }}
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
        className="card border-0 shadow-lg"
        style={{
          maxWidth: "420px",
          width: "100%",
          borderRadius: "20px",
          backdropFilter: "blur(12px)",
          background: "rgba(255, 255, 255, 0.9)",
          animation: "fadeInUp 0.8s ease",
        }}
      >
        <div className="card-body p-5">
          <div className="text-center mb-4">
            <h2 className="fw-bold text-dark">Create Account</h2>
            <p className="text-muted">Sign up and get started</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="form-label fw-semibold">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                autoComplete="off"
                name="name"
                className="form-control form-control-lg"
                style={{
                  borderRadius: "12px",
                  padding: "14px",
                  border: "1px solid #ddd",
                }}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="form-label fw-semibold">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                autoComplete="off"
                className="form-control form-control-lg"
                name="email"
                style={{
                  borderRadius: "12px",
                  padding: "14px",
                  border: "1px solid #ddd",
                }}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="form-label fw-semibold">
                Password
              </label>
              <input
                type="password"
                placeholder="Create a password"
                autoComplete="off"
                className="form-control form-control-lg"
                name="password"
                style={{
                  borderRadius: "12px",
                  padding: "14px",
                  border: "1px solid #ddd",
                }}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary btn-lg w-100 fw-semibold"
              style={{
                borderRadius: "12px",
                padding: "14px",
                background:
                  "linear-gradient(90deg, #ff6a00 0%, #ee0979 100%)",
                border: "none",
                transition: "0.3s ease-in-out",
              }}
              onMouseOver={(e) =>
                (e.target.style.background =
                  "linear-gradient(90deg, #e65c00 0%, #d10068 100%)")
              }
              onMouseOut={(e) =>
                (e.target.style.background =
                  "linear-gradient(90deg, #ff6a00 0%, #ee0979 100%)")
              }
            >
              Create Account
            </button>
          </form>

          <div className="text-center mt-4">
            <p className="text-muted mb-1">Already have an account?</p>
            <Link
              to="/login"
              className="btn btn-outline-dark w-100 fw-semibold"
              style={{
                borderRadius: "12px",
                padding: "14px",
                transition: "0.3s ease",
              }}
              onMouseOver={(e) =>
                (e.target.style.background = "rgba(0,0,0,0.05)")
              }
              onMouseOut={(e) => (e.target.style.background = "transparent")}
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>

      {/* Animations keyframes */}
      <style>
        {`
          .animated-bg {
            background: linear-gradient(-45deg, #ff6a00, #ee0979, #ff6a00);
            background-size: 400% 400%;
            animation: gradientShift 15s ease infinite;
          }

          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

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

export default SignUP;