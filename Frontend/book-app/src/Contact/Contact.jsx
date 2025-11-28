import React from 'react'
import Navigation from '../Navigation/Navigation'
import { useState } from "react";
import Style from "./Contact.module.css";

export const Contact = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  function handleInput(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    let newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("✅ Contact form submitted:", formData);
      alert("Message sent successfully!");
      setFormData({ username: "", email: "", message: "" });
    }
  }

  return (
    <>
    <Navigation/>
    <div className={Style.container}>
      <div className={Style.formWrapper}>
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your username"
            name="username"
            value={formData.username}
            onChange={handleInput}
          />
          {errors.username && (
            <p className={Style.error}>{errors.username}</p>
          )}

          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleInput}
          />
          {errors.email && <p className={Style.error}>{errors.email}</p>}

          <textarea
            placeholder="Enter your message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleInput}
          ></textarea>
          {errors.message && <p className={Style.error}>{errors.message}</p>}

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
    </>
  );
}
