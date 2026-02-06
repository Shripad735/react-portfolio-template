import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faCode, faTerminal, faBookOpen } from "@fortawesome/free-solid-svg-icons";
import '../assets/styles/Main.scss';
import Myself from '../assets/images/Myself.jpg';

function Main() {
  const scrollToSection = (sectionId: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const socialLinks = [
    { href: "https://github.com/Shripad735", icon: faGithub, label: "GitHub" },
    { href: "https://www.linkedin.com/in/shripad-khandare-39a2a2203/", icon: faLinkedin, label: "LinkedIn" },
    { href: "https://leetcode.com/u/Shripad735/", icon: faCode, label: "LeetCode" },
    { href: "https://www.hackerrank.com/profile/shripad_khandare", icon: faTerminal, label: "HackerRank" },
    { href: "https://www.goodreads.com/user/show/195633318-shripad-khandare", icon: faBookOpen, label: "Goodreads" },
  ];

  return (
    <section className="container">
      <div className="about-section" id="home">
        <div className="image-wrapper">
          <img src={Myself} alt="Shripad Khandare portrait" />
        </div>
        <div className="content">
          <span className="hero-kicker">Backend Developer</span>
          <h1>Shripad Khandare</h1>
          <p>Backend Developer (Node.js)</p>
          <p>Cloud & DevOps Enthusiast</p>
          <p className="hero-summary">
            I design reliable backend systems, cloud-native workflows, and practical automation with a focus on clean delivery and measurable impact.
          </p>
          <div className="social_icons">
            {socialLinks.map((item) => (
              <a key={item.label} href={item.href} target="_blank" rel="noreferrer" aria-label={item.label}>
                <FontAwesomeIcon icon={item.icon} />
              </a>
            ))}
          </div>
          <div className="hero-cta">
            <a href="#projects" onClick={scrollToSection("projects")}>
              View Projects
            </a>
            <a href="#contact" onClick={scrollToSection("contact")}>
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;
