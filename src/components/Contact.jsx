import React from "react";
import { MdEmail } from "react-icons/md"; // Email icon
import { FaGithub, FaLinkedin } from "react-icons/fa"; // GitHub & LinkedIn

import "./Contact.css"; // optional if you want clean CSS later

function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-icons">
        <a
          href="mailto:seuneipaye@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MdEmail className="icon" />
        </a>
        <span className="dot">•</span>
        <a
          href="https://github.com/seun-ipaye"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="icon" />
        </a>
        <span className="dot">•</span>
        <a
          href="https://linkedin.com/in/seunipaye"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="icon" />
        </a>
      </div>
    </section>
  );
}

export default Contact;
