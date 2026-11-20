import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "../assets/styles/Contact.scss";

function Contact() {
  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact-panel">
          <p className="page-eyebrow">Contact</p>
          <h1>Let&apos;s build something reliable.</h1>
          <p>
            I&apos;m happy to talk about backend roles, cloud work, or interesting side projects.
            The fastest way to reach me is email. I read everything.
          </p>
          <a className="contact-email-btn" href="mailto:shripadkhandare2020@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} size="sm" />
            shripadkhandare2020@gmail.com
          </a>
          <div className="contact-meta">
            <span>pune, in</span>
            <span>ist (utc+5:30)</span>
            <span>response: ~24h</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
