import React from "react";
import "../assets/styles/Contact.scss";

function Contact() {
  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>
            You can reach me at{" "}
            <a href="mailto:shripadkhandare2020@gmail.com">
              shripadkhandare2020@gmail.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
