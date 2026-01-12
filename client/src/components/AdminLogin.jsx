import React, { useState } from "react";
import "../css/admin.css"; // External CSS
import { useNavigate } from "react-router-dom";
const AdminLogin = () => {
  const Navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add login logic here
    try {
      const response = await fetch("http://localhost:7898/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log("admin loggedIn successfully");
        setSubmitted(true);
        setFormData({ email: "", password: "" });
        // window.location.href = "/dashboard";
        Navigate("/dashboard");
      } else {
        console.error("loggedIn failed");
        alert("Something went wrong. Try again.");
      }
      // ...existing code...
    } catch (error) {
      console.error("Error to LOgged in:", error);
      alert("Server error. Try again later.");
    }
    console.log(formData);
  };

  return (
    <div className="form-container">
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="input"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="input"
        />
        <button type="submit" className="button">
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
