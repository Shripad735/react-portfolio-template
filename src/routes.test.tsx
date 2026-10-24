import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Shell } from "./App";
import Contact from "./components/Contact";
import { profile } from "./data/profile";

const routes = [
  "/",
  "/expertise",
  "/experience",
  "/projects",
  "/articles",
  "/reading",
  "/contact",
  "/not-a-real-page",
];

describe("every route renders cleanly", () => {
  it.each(routes)("renders %s with a single level-one heading", (route) => {
    render(
      <MemoryRouter initialEntries={[route]}>
        <Shell />
      </MemoryRouter>,
    );

    const headings = screen.getAllByRole("heading", { level: 1 });
    expect(headings).toHaveLength(1);
    expect(headings[0].textContent?.trim().length).toBeGreaterThan(0);
  });

  it("shows the primary navigation on every route", () => {
    render(
      <MemoryRouter initialEntries={["/reading"]}>
        <Shell />
      </MemoryRouter>,
    );

    expect(screen.getByRole("navigation", { name: /primary/i })).toBeInTheDocument();
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });
});

describe("contact form", () => {
  it("blocks submission and reports each missing field", () => {
    render(<Contact />);

    fireEvent.submit(screen.getByRole("button", { name: /send message/i }).closest("form")!);

    expect(screen.getByText(/please enter your name/i)).toBeInTheDocument();
    expect(screen.getByText(/please enter your email/i)).toBeInTheDocument();
    expect(screen.getByText(/please write a short message/i)).toBeInTheDocument();
  });

  it("rejects a malformed email address", () => {
    render(<Contact />);

    fireEvent.change(screen.getByLabelText(/^name$/i), { target: { value: "Ada" } });
    fireEvent.change(screen.getByLabelText(/^email$/i), { target: { value: "ada@" } });
    fireEvent.change(screen.getByLabelText(/^message$/i), {
      target: { value: "Hello there." },
    });
    fireEvent.submit(screen.getByRole("button", { name: /send message/i }).closest("form")!);

    expect(screen.getByText(/looks incomplete/i)).toBeInTheDocument();
  });

  it("offers the direct email address as a fallback", () => {
    render(<Contact />);

    expect(screen.getByRole("link", { name: profile.email })).toHaveAttribute(
      "href",
      `mailto:${profile.email}`,
    );
  });
});
