import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const Copy = (text) => {
    navigator.clipboard.writeText(text);
  };

  const validateField = (event) => {
    const field = event.target;
    const errorMessage = document.getElementById(field.id + "-error");

    errorMessage.textContent = !field.value.trim()
      ? `The ${field.name} field is required`
      : "";

    field.classList.toggle("input-error", !field.value.trim());
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "Leonov Flooring",
        "LeonovFlooring",
        form,
        "-SIS1eelXVF-5RdsU"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Сообщение отправлено!");
          setForm({ name: "", email: "", subject: "", message: "" });
        },
        (err) => {
          console.log("FAILED...", err);
          alert("Ошибка отправки");
        }
      );
  };

  return (
    <div id="contact">
      <div className="container">
        <div className="title-container">
          <h2>Get in Touch</h2>
          <h3>If you want to get a quote or just ask us a question, feel free to text us or fill out the form below.</h3>
        </div>
        <div className="contacts">
          <div onClick={() => Copy("+380734173056")}>
            <div className="icon">
              <svg fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 891.024 891.024">
                <g>
                  <path d="M2.8,180.875c46.6,134,144.7,286.2,282.9,424.399c138.2,138.2,290.4,236.301,424.4,282.9c18.2,6.3,38.3,1.8,52-11.8
                      l92.7-92.7l21.6-21.6c19.5-19.5,19.5-51.2,0-70.7l-143.5-143.4c-19.5-19.5-51.2-19.5-70.7,0l-38.899,38.9
                      c-20.2,20.2-52.4,22.2-75,4.6c-44.7-34.8-89-73.899-131.9-116.8c-42.9-42.9-82-87.2-116.8-131.9c-17.601-22.6-15.601-54.7,4.6-75
                      l38.9-38.9c19.5-19.5,19.5-51.2,0-70.7l-143.5-143.5c-19.5-19.5-51.2-19.5-70.7,0l-21.6,21.6l-92.7,92.7
                      C1,142.575-3.5,162.675,2.8,180.875z"/>
                </g>
              </svg>
            </div>
            <span> +380734173056 </span>
          </div>
          <div onClick={() => Copy("+380734173056")}>
            <div className="icon">
              <svg fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 891.024 891.024">
                <g>
                  <path d="M2.8,180.875c46.6,134,144.7,286.2,282.9,424.399c138.2,138.2,290.4,236.301,424.4,282.9c18.2,6.3,38.3,1.8,52-11.8
                      l92.7-92.7l21.6-21.6c19.5-19.5,19.5-51.2,0-70.7l-143.5-143.4c-19.5-19.5-51.2-19.5-70.7,0l-38.899,38.9
                      c-20.2,20.2-52.4,22.2-75,4.6c-44.7-34.8-89-73.899-131.9-116.8c-42.9-42.9-82-87.2-116.8-131.9c-17.601-22.6-15.601-54.7,4.6-75
                      l38.9-38.9c19.5-19.5,19.5-51.2,0-70.7l-143.5-143.5c-19.5-19.5-51.2-19.5-70.7,0l-21.6,21.6l-92.7,92.7
                      C1,142.575-3.5,162.675,2.8,180.875z"/>
                </g>
              </svg>
            </div>
            <span> +380734173056 </span>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Contact Us</h2>

          <div className="form-group">
            <span>Your Name *</span>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              onBlur={validateField}
              required
            />
            <span className="error-message" id="name-error"></span>
          </div>

          <div className="form-group">
            <span>Your Email *</span>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              onBlur={validateField}
              required
            />
            <span className="error-message" id="email-error"></span>
          </div>

          <div className="form-group">
            <span>Write a Subject</span>
            <input
              type="text"
              id="subject"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              onBlur={validateField}
            />
            <span className="error-message" id="subject-error"></span>
          </div>

          <div className="form-group">
            <span>Your Message</span>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={form.message}
              onChange={handleChange}
              onBlur={validateField}
              required
            ></textarea>
            <span className="error-message" id="message-error"></span>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
