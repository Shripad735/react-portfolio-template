import React from "react";
import { Link } from "react-router-dom";
import portrait from "../assets/images/Myself.jpg";
import Icon, { IconName } from "../components/Icon";
import { featuredProjects, projects } from "../data/projects";
import { primarySocials, profile } from "../data/profile";
import "../assets/styles/Main.scss";

const iconNames: Record<string, IconName> = {
  GitHub: "github",
  LinkedIn: "linkedin",
  Medium: "medium",
  LeetCode: "leetcode",
  Goodreads: "goodreads",
  HackerRank: "hackerrank",
};

/**
 * The home page is a single screen: nothing below the fold, nothing to scroll
 * for. Everything else lives one click away in the navigation.
 */
function Main() {
  return (
    <div className="stage">
      <span className="stage__backdrop grid-backdrop" aria-hidden="true" />

      <div className="container stage__inner">
        <div className="stage__grid">
        <div className="stage__copy">
          <p className="eyebrow">{profile.role}</p>

          <h1 className="stage__title">{profile.headline}</h1>

          <p className="stage__summary">{profile.summary}</p>

          <ul className="stage__links" aria-label="Selected projects">
            {featuredProjects.map((project) => (
              <li key={project.slug}>
                <a
                  className="stage__link"
                  href={project.liveUrl ?? project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="stage__link-title">{project.title}</span>
                  <span className="stage__link-meta mono">{project.kind}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="stage__actions">
            <Link className="button" to="/contact">
              Get in touch
            </Link>
            <a
              className="button button--ghost"
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
            >
              Résumé
            </a>
            <Link className="stage__all" to="/projects">
              All {projects.length} projects
            </Link>
          </div>
        </div>

        <figure className="stage__portrait">
          <img
            src={portrait}
            alt={`Portrait of ${profile.name}`}
            width={2933}
            height={3047}
            decoding="async"
          />
        </figure>
        </div>

        <div className="stage__foot">
          <p className="stage__status">
            <span className="status-dot" aria-hidden="true" />
            {profile.availability}
          </p>

          <ul className="socials" aria-label="Profiles">
            {primarySocials.map((social) => (
              <li key={social.label}>
                <a
                  className="socials__link"
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  title={social.label}
                >
                  <Icon name={iconNames[social.label]} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Main;
