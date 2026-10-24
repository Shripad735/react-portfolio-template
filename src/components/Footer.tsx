import React from "react";
import { Link } from "react-router-dom";
import { primarySocials, profile } from "../data/profile";
import "../assets/styles/Footer.scss";

const year = new Date().getFullYear();

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <p className="site-footer__identity">
          <span className="site-footer__name">{profile.name}</span>
          <span className="site-footer__note">
            {profile.role}, {profile.location}
          </span>
        </p>

        <nav className="site-footer__nav" aria-label="Footer">
          <ul className="site-footer__links">
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/experience">Experience</Link>
            </li>
            <li>
              <Link to="/articles">Writing</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            {primarySocials.map((social) => (
              <li key={social.label}>
                <a href={social.href} target="_blank" rel="noreferrer">
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="site-footer__base mono">
          © {year} {profile.name}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
