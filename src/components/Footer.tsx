import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import "../assets/styles/Footer.scss";

function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="mono">© {new Date().getFullYear()}</span>
          <span>Designed &amp; built by <strong>Shripad Khandare</strong></span>
        </div>
        <div className="footer-links">
          <a href="https://github.com/Shripad735" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FontAwesomeIcon icon={faGithub} /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/shripad-khandare-39a2a2203/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
          </a>
          <a href="#top" onClick={(e) => { e.preventDefault(); scrollTop(); }}>
            <FontAwesomeIcon icon={faArrowUp} size="xs" /> Top
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
