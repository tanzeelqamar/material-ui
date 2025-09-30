import React, { useState } from "react";
import "./LoginSigup.css";

function LoginSignup() {
  const [users, setUsers] = useState([]); 
  const [isLogin, setIsLogin] = useState(true); 
  const [formData, setFormData] = useState({ email: "", password: "" });

  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  
  const handleSignup = () => {
    const userExists = users.find((u) => u.email === formData.email);
    if (userExists) {
      alert("User already exists! Please login");
      setIsLogin(true);
      return;
    }
    setUsers([...users, formData]);
    alert("Signup successful! Please login");
    setFormData({ email: "", password: "" });
    setIsLogin(true);
  };

  
  const handleLogin = () => {
    const user = users.find(
      (u) => u.email === formData.email && u.password === formData.password
    );

    if (user) {
      console.log("User Logged In", user);
      alert("Login successful!");
      setFormData({ email: "", password: "" });
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="container">
      <h1>{isLogin ? "Login" : "Signup"}</h1>

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="inputField"
      />
      <br />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        className="inputField"
      />
      <br />

      {isLogin ? (
        <button className="btn" onClick={handleLogin}>
          Login
        </button>
      ) : (
        <button className="btn" onClick={handleSignup}>
          Signup
        </button>
      )}

      <p>
        {isLogin ? "Don't have an account?" : "Already signed up?"}{" "}
        <span className="linkText" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Signup here" : "Login here"}
        </span>
      </p>
    </div>
  );
}

export default LoginSignup;
