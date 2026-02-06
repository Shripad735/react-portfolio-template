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
          className="brand-button"
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
        >
          SK
        </button>

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
          <button
            type="button"
            className="theme-toggle"
            onClick={modeChange}
            aria-label={`Switch to ${mode === "dark" ? "light" : "dark"} mode`}
          >
            {mode === "dark" ? "Light" : "Dark"}
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Navigation;
