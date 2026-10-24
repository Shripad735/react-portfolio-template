import React from "react";
import { projects } from "../data/projects";
import "../assets/styles/Project.scss";

function Project() {
  return (
    <section className="section container work" aria-labelledby="work-heading">
      <header className="page-head">
        <p className="eyebrow">Projects</p>
        <h1 id="work-heading">Things I have built</h1>
        <p className="lede">
          A mix of course work, hackathon builds, and tools I made because I needed them. Each
          entry lists the stack and links to the source or a write-up where one exists.
        </p>
      </header>

      <ul className="work-list">
        {projects.map((project, index) => (
          <li className="work-item" key={project.slug} id={project.slug}>
            <div className="work-item__index mono" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </div>

            <div className="work-item__body">
              <div className="work-item__heading">
                <h2 className="work-item__title">{project.title}</h2>
                <p className="work-item__meta mono">
                  {project.kind}, {project.year}
                </p>
              </div>

              <p className="work-item__summary">{project.summary}</p>

              <ul className="tags work-item__stack" aria-label={`${project.title} stack`}>
                {project.stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className="work-item__links">
                {project.liveUrl && (
                  <a
                    className="link"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {project.liveLabel ?? "Live"}
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    className="link"
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {project.githubLabel ?? "Source"}
                  </a>
                )}
              </div>
            </div>

            <div className="work-item__thumb" aria-hidden="true">
              <img src={project.image} alt="" loading="lazy" decoding="async" />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Project;
