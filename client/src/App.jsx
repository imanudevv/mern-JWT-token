import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login.jsx";
import SignUP from "./SignUP.jsx";
import Dashboard from "./Dashboard.jsx";
import Home from "./Home.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />          {/* Default page */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUP />} />   {/* SignUp page */}
        <Route path="/register" element={<SignUP />} />   {/* Add this for /register route */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
