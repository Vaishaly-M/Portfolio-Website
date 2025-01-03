import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false);
  const [error, setError] = useState(null); // For detailed error display

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2mu5xtl", // Replace with your actual service ID
        "template_m5udu2c", // Replace with your actual template ID
        form.current,
        "VLwg1ltOWvnCYAiK_" // Replace with your actual public key
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setDone(true);
          e.target.reset(); // Clear form after successful submission
        },
        (error) => {
          console.error("Failed to send email:", error.text);
          setError("Failed to send email. Please try again later.");
        }
      );
  };

  return (
    <div className="contact-form" id="contact">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          <span style={{ color: darkMode ? "white" : "" }}>Get in Touch</span>
          <span style={{ color: "var(--maroon)" }}>Contact me</span>
        </div>
      </div>

      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
            required
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
            required
          />
          <textarea
            name="message"
            className="user"
            placeholder="Message"
            required
          />
          <input type="submit" value="Send" className="button" />
          {done && <span>Thanks for contacting me!</span>}
          {error && <span className="error">{error}</span>}
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
