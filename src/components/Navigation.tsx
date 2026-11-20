import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faArrowUpRightFromSquare, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { resumeConfig } from "./Resume";
import "../assets/styles/Navigation.scss";

type NavItem = {
  label: string;
  to?: string;
};

const navItems: NavItem[] = [
  { label: "About", to: "/about" },
  { label: "Expertise", to: "/expertise" },
  { label: "Experience", to: "/experience" },
  { label: "Projects", to: "/projects" },
  { label: "Articles", to: "/articles" },
  { label: "Reading", to: "/reading" },
  { label: "Contact", to: "/contact" },
];

function getInitialTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "light";
  const stored = window.localStorage.getItem("portfolio-theme");
  return stored === "dark" ? "dark" : "light";
}

function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">(getInitialTheme);
  const closeMenu = () => setMobileOpen(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  return (
    <header className="site-nav">
      <div className="nav-inner">
        <NavLink className="site-name" to="/" onClick={closeMenu} aria-label="Shripad Khandare home">
          <span className="site-name-mark">SK</span>
          <span>shripad.khandare</span>
        </NavLink>
        <nav
          id="primary-navigation"
          className={`menu ${mobileOpen ? "open" : ""}`}
          aria-label="Primary"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to as string}
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <button
          className="nav-theme"
          type="button"
          aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
        >
          <FontAwesomeIcon icon={theme === "dark" ? faSun : faMoon} />
        </button>
        <a
          className="nav-cta"
          href={resumeConfig.url}
          target="_blank"
          rel="noreferrer"
          onClick={closeMenu}
        >
          {resumeConfig.label}
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" />
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={mobileOpen}
          aria-controls="primary-navigation"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((open) => !open)}
        >
          <FontAwesomeIcon icon={mobileOpen ? faXmark : faBars} />
        </button>
      </div>
    </header>
  );
}

export default Navigation;
