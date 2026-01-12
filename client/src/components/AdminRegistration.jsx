import React, { useState } from "react";
import "../css/admin.css"; // Import the external CSS

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
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
    try {
      const response = await fetch("http://localhost:7898/admin/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("User registered successfully");
        setSubmitted(true); // Show success message
        setFormData({ name: "", email: "", password: "" }); // Clear form
      } else {
        console.error("Registration failed");
        alert("Something went wrong. Try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Server error. Try again later.");
    }
  };
  return (
    <div className="form-container">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="input"
        />
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
          Register
        </button>
        <a href="/adminLogin">Login</a>
      </form>
      {submitted && <p className="success-message">Registration successful!</p>}
    </div>
  );
};

export default RegistrationForm;
