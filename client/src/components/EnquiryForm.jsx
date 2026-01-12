import { useState } from "react";
import "../css/EnquiryForm.css";

function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    course: "",
  });

  const [submit, setSubmitted] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      fetch("http://localhost:7898/user/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log("data submitted");
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          number: "",
          course: "",
        });
        // window.location.href = "/dashboard";
      } else {
        console.error("loggedIn failed");
        alert("Something went wrong. Try again.");
      }
    } catch (error) {
      return error;
    }
  };
  return (
    <section className="enquiry-wrapper">
      <div className="enquiry-image"></div>

      <div className="enquiry-form-container">
        <h2 className="enquiry-title">Send Your Enquiry</h2>
        <form onSubmit={handleSubmit} className="enquiry-form">
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            onChange={handleChange}
            value={formData.name}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            name="email"
            onChange={handleChange}
            value={formData.email}
            required
          />
          <input
            type="number"
            placeholder="Phone Number"
            name="number"
            onChange={handleChange}
            value={formData.number}
            required
          />
          <textarea
            rows="5"
            placeholder="course"
            name="course"
            onChange={handleChange}
            value={formData.course}
            required
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default EnquiryForm;
