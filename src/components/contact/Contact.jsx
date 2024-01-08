import React, { useState } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import emailjs from "emailjs-com";

const Contact = () => {
  const [emailIsSent, setEmailIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_x80v5p8",
        "template_v21kbdn",
        e.target,
        "k-bAi-hAyTVkRTUn-"
      )
      .then(() => {
        setEmailIsSent(true);
      });
  };

  return (
    <section id="contact" className="contact-section">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>patelnency1210@gmail.com</h5>
            <a href="mailto:patelnency1210@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>LinkedIn</h4>
            <h5>Nency Patel</h5>
            <a href="https://www.linkedin.com/in/nencyben-patel-933581179/">
              Send a message
            </a>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Contact;
