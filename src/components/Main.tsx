import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight, faCode, faTerminal, faBookOpen, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../assets/styles/Main.scss";

function Main() {
  const socialLinks = [
    { href: "https://github.com/Shripad735", icon: faGithub, label: "GitHub" },
    { href: "https://www.linkedin.com/in/shripad-khandare-39a2a2203/", icon: faLinkedin, label: "LinkedIn" },
    { href: "https://leetcode.com/u/Shripad735/", icon: faCode, label: "LeetCode" },
    { href: "https://www.hackerrank.com/profile/shripad_khandare", icon: faTerminal, label: "HackerRank" },
    { href: "https://www.goodreads.com/user/show/195633318-shripad-khandare", icon: faBookOpen, label: "Goodreads" },
  ];

  return (
    <section className="container hero-page">
      <div className="hero-single">
        <div className="about-section">
          <div className="content">
            <div className="hero-status">
              <span className="status-pill mono">pune, in · ist (utc+5:30)</span>
              <span className="status-pill mono">backend · cloud · ai</span>
            </div>
            <p className="page-eyebrow">Backend developer</p>
            <h1>Shripad Khandare</h1>
            <p className="hero-role">
              I work on backend systems, cloud infrastructure, and applied AI.
            </p>
            <p className="hero-summary">
              Most of my backend work is in Node.js with clean REST APIs, login and auth, and databases
              that stay easy to change. On the cloud side I work with compute, storage, networks,
              permissions, and scaling, plus CI/CD pipelines and infrastructure as code.
            </p>
            <p className="hero-summary">
              I also work with applied AI. I integrate AI into real applications using tool use, memory,
              agents, context management, RAG with vector databases.
              I also write technical blogs that explain how AI and related technology work in simple words.
            </p>
            <div className="hero-cta">
              <Link className="btn btn-primary" to="/projects">
                View projects <FontAwesomeIcon icon={faArrowRight} size="xs" />
              </Link>
              <Link className="btn btn-secondary" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} size="xs" /> Get in touch
              </Link>
            </div>
            <div className="social-row" aria-label="Social profiles">
              {socialLinks.map((item) => (
                <a key={item.label} href={item.href} target="_blank" rel="noreferrer" aria-label={item.label}>
                  <FontAwesomeIcon icon={item.icon} size="sm" />
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;
