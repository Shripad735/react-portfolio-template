import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "../assets/styles/Footer.scss";

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/Shripad735" target="_blank" rel="noreferrer" aria-label="GitHub">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/shripad-khandare-39a2a2203/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
      <p>
        A portfolio designed and built by{" "}
        <a href="https://github.com/Shripad735" target="_blank" rel="noreferrer">Shripad Khandare</a> with care.
      </p>
    </footer>
  );
}

export default Footer;
