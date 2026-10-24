import React from "react";
import { fireEvent, render, screen, within } from "@testing-library/react";
import App from "./App";
import Project from "./components/Project";
import { profile } from "./data/profile";
import { projects } from "./data/projects";
import { navItems } from "./data/nav";

describe("site shell", () => {
  beforeEach(() => {
    window.localStorage.clear();
    delete document.documentElement.dataset.theme;
  });

  it("renders the home page with a single top-level heading", () => {
    render(<App />);

    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent(profile.headline);
    expect(screen.getByText(profile.summary)).toBeInTheDocument();
  });

  it("exposes the primary navigation with working routes", () => {
    render(<App />);

    const nav = screen.getByRole("navigation", { name: /primary/i });
    expect(within(nav).getByRole("link", { name: /projects/i })).toHaveAttribute(
      "href",
      "/projects",
    );

    // Every section lives in the header, so each one is reachable in one click.
    for (const item of navItems) {
      expect(within(nav).getByRole("link", { name: new RegExp(item.label, "i") })).toHaveAttribute(
        "href",
        item.to,
      );
    }
  });

  it("keeps the résumé and theme switch in the header", () => {
    render(<App />);

    // The résumé appears in the utility cluster and again in the hero actions.
    const resumeLinks = screen.getAllByRole("link", { name: /résumé/i });
    expect(resumeLinks.length).toBeGreaterThan(0);
    resumeLinks.forEach((link) => expect(link).toHaveAttribute("href", profile.resumeUrl));

    expect(
      screen.getAllByRole("button", { name: /switch to .* theme/i }).length,
    ).toBeGreaterThan(0);
  });

  it("defaults to the light theme", () => {
    render(<App />);

    expect(document.documentElement.dataset.theme).not.toBe("dark");
  });

  it("switches theme from the header toggle and back", () => {
    render(<App />);

    const [toggle] = screen.getAllByRole("button", { name: /switch to .* theme/i });
    expect(toggle).toHaveAttribute("aria-pressed", "false");

    fireEvent.click(toggle);
    expect(document.documentElement.dataset.theme).toBe("dark");
    expect(window.localStorage.getItem("theme")).toBe("dark");

    fireEvent.click(toggle);
    expect(document.documentElement.dataset.theme).toBe("light");
  });
});

describe("projects page", () => {
  it("lists every project with its stack", () => {
    render(<Project />);

    expect(screen.getByRole("heading", { name: /things i have built/i })).toBeInTheDocument();
    expect(screen.getAllByRole("heading", { level: 2 })).toHaveLength(projects.length);
  });

  it("links each project to its source or live page", () => {
    render(<Project />);

    const withLinks = projects.filter(
      (project) => project.githubUrl || project.liveUrl,
    );
    expect(withLinks).toHaveLength(projects.length);
    expect(
      screen.getAllByRole("link", { name: /^(live|source|writeup|project page)$/i }).length,
    ).toBeGreaterThan(0);
  });

  it("shows no filter controls", () => {
    render(<Project />);

    expect(screen.queryAllByRole("button")).toHaveLength(0);
  });
});
