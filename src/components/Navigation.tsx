import React, { useEffect, useState } from "react";
import { resumeConfig } from "./Resume";
import "../assets/styles/Navigation.scss";

type NavItem = {
  label: string;
  target: string;
  isExternal?: boolean;
};

type NavigationProps = {
  parentToChild: { mode: string };
  modeChange: () => void;
};

const navItems: NavItem[] = [
  { label: "Expertise", target: "expertise" },
  { label: "Certifications", target: "certifications" },
  { label: "History", target: "history" },
  { label: "Projects", target: "projects" },
  { label: "Articles", target: "articles" },
  { label: "Contact", target: "contact" },
  { label: resumeConfig.label, target: resumeConfig.url, isExternal: resumeConfig.isExternal },
];

function Navigation({ parentToChild, modeChange }: NavigationProps) {
  const { mode } = parentToChild;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleNavItemClick = (item: NavItem) => {
    if (item.isExternal) {
      window.open(item.target, "_blank");
      return;
    }

    scrollToSection(item.target);
    setMobileOpen(false);
  };

  return (
    <header id="navigation" className={`site-nav ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-inner">
        <button
          className={`menu-toggle ${mobileOpen ? "active" : ""}`}
          type="button"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`menu ${mobileOpen ? "open" : ""}`} aria-label="Primary">
          {navItems.map((item) => (
            <button key={item.label} type="button" onClick={() => handleNavItemClick(item)}>
              {item.label}
            </button>
          ))}
        </nav>

        <button
          type="button"
          className="theme-toggle"
          onClick={modeChange}
          aria-label={`Switch to ${mode === "dark" ? "light" : "dark"} mode`}
        >
          {mode === "dark" ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
}

export default Navigation;
