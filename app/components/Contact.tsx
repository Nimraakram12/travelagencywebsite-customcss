import React from "react";
import "../style/Contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <p>
          Have questions or need assistance planning your dream vacation? Get in touch with us, and our team will be happy to help!
        </p>
        <div className="contact-form-container">
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="name" placeholder="Enter your full name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} placeholder="Write your message" required></textarea>
            </div>
            <button type="submit" className="contact-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
