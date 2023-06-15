import React, { useState } from "react";
import "./ContactForm.css";

function ContactForm() {



  return (
    <div id="contact-form-div">
        <h1 id="contact-from-h1">Contact Us</h1>
      <form id="contact-form">
        <label className="contact-form-label">Full Name:</label>
        <input type="text" required className="contact-form-input"></input>
        <label className="contact-form-label">Email:</label>
        <input type="email" required className="contact-form-input"></input>
        <label className="contact-form-label">Number:</label>
        <input type="text" required className="contact-form-input"></input>
        <label className="contact-form-label">
          Add a comment <span id="contact-form-span">&#40;optional&#41;</span>:
        </label>
        <textarea type="text" className="contact-form-input" id="contact-from-comment" row="6"></textarea>
        <input type="submit" id="contact-form-submit"></input>
      </form>
    </div>
  );
}

export default ContactForm;
