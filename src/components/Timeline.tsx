import React from "react";
import { education, roles } from "../data/journey";
import "../assets/styles/Timeline.scss";

function Timeline() {
  return (
    <section className="section container history" aria-labelledby="experience-heading">
      <header className="page-head">
        <p className="eyebrow">Experience</p>
        <h1 id="experience-heading">Where I have worked</h1>
        <p className="lede">
          Three internships and one full-time role. The first was mostly front end, and since then
          the work has moved steadily toward services, cloud, and automation.
        </p>
      </header>

      <div className="history__block">
        <h2 className="history__label">Roles</h2>
        <ol className="timeline">
          {roles.map((role) => (
            <li className="entry" key={`${role.org}-${role.period}`}>
              <div className="entry__aside">
                <p className="entry__period mono">{role.period}</p>
                {role.location && <p className="entry__location mono">{role.location}</p>}
              </div>

              <div className="entry__body">
                <h3 className="entry__title">{role.title}</h3>
                <p className="entry__org">{role.org}</p>
                <p className="entry__summary">{role.summary}</p>
                {role.points.length > 0 && (
                  <ul className="entry__points">
                    {role.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="history__block">
        <h2 className="history__label">Education</h2>
        <ul className="education">
          {education.map((study) => (
            <li className="study" key={study.qualification}>
              <p className="study__period mono">{study.period}</p>
              <div className="study__body">
                <h3 className="study__title">{study.qualification}</h3>
                <p className="study__org">{study.institution}</p>
              </div>
              <p className="study__result mono">{study.result}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Timeline;
