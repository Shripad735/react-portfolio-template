import React, { useEffect } from "react";
import { BrowserRouter, Link, Navigate, Route, Routes, useLocation } from "react-router-dom";
import {
  Blogs,
  Certifications,
  Contact,
  Expertise,
  Footer,
  Main,
  Project,
  ReadingJourney,
  Timeline,
} from "./components";
import Navigation from "./components/Navigation";
import "./index.scss";

/** Reset scroll position on navigation, but leave in-page anchors alone. */
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, hash]);

  return null;
}

function Page({
  children,
  stage = false,
}: {
  children: React.ReactNode;
  stage?: boolean;
}) {
  return (
    <div className={`shell__main${stage ? " shell__main--stage" : ""}`}>{children}</div>
  );
}

function NotFound() {
  return (
    <section className="section container not-found">
      <p className="eyebrow">Error 404</p>
      <h1>That page has moved on.</h1>
      <p className="lede">
        The address you followed does not match any route on this site. One of the links below
        should get you back on track.
      </p>
      <p className="not-found__links">
        <Link className="button" to="/">
          Return home
        </Link>
        <Link className="button button--ghost" to="/projects">
          Browse projects
        </Link>
      </p>
    </section>
  );
}

/**
 * Router-independent shell: navigation, routes, and footer. Exported separately
 * so the tree can be rendered inside any router (tests, static rendering).
 */
export function Shell() {
  return (
    <>
      <ScrollToTop />
      <div className="shell">
        <a className="skip-link" href="#content">
          Skip to content
        </a>
        <Navigation />
        <div id="content">
          <Routes>
            <Route
              path="/"
              element={
                <Page stage>
                  <Main />
                </Page>
              }
            />
            <Route
              path="/expertise"
              element={
                <Page>
                  <Expertise />
                </Page>
              }
            />
            <Route
              path="/experience"
              element={
                <Page>
                  <Timeline />
                  <Certifications />
                </Page>
              }
            />
            <Route
              path="/projects"
              element={
                <Page>
                  <Project />
                </Page>
              }
            />
            <Route
              path="/work"
              element={
                <Navigate to="/projects" replace />
              }
            />
            <Route path="/certifications" element={<Navigate to="/experience" replace />} />
            <Route path="/about" element={<Navigate to="/" replace />} />
            <Route
              path="/articles"
              element={
                <Page>
                  <Blogs />
                </Page>
              }
            />
            <Route path="/writing" element={<Navigate to="/articles" replace />} />
            <Route
              path="/reading"
              element={
                <Page>
                  <ReadingJourney />
                </Page>
              }
            />
            <Route
              path="/contact"
              element={
                <Page>
                  <Contact />
                </Page>
              }
            />
            <Route path="*" element={<Page><NotFound /></Page>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Shell />
    </BrowserRouter>
  );
}

export default App;
