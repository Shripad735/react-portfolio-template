import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { navItems } from "../data/nav";
import { profile } from "../data/profile";
import "../assets/styles/Navigation.scss";

function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="site-header__inner container">
        <NavLink className="brand" to="/" aria-label={`${profile.name}, home`}>
          <span className="brand__mark" aria-hidden="true">
            {profile.initials}
          </span>
          <span className="brand__text">
            <span className="brand__name">{profile.name}</span>
            <span className="brand__role">{profile.role}</span>
          </span>
        </NavLink>

        <nav
          id="primary-navigation"
          className={`nav${mobileOpen ? " is-open" : ""}`}
          aria-label="Primary"
        >
          <ul className="nav__list">
            {navItems.map((item, index) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) => `nav__link${isActive ? " is-active" : ""}`}
                >
                  <span className="nav__index" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav__utils">
          <a
            className="button button--ghost nav__resume"
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
          >
            Résumé
          </a>
          <ThemeToggle className="nav__theme" />

          <button
            className="nav-toggle"
            type="button"
            aria-expanded={mobileOpen}
            aria-controls="primary-navigation"
            onClick={() => setMobileOpen((open) => !open)}
          >
            <span className="nav-toggle__bars" aria-hidden="true">
              <span />
              <span />
            </span>
            <span className="nav-toggle__label">{mobileOpen ? "Close" : "Menu"}</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navigation;
