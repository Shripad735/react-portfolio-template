import React from "react";
import { certifications } from "../data/journey";
import "../assets/styles/Certifications.scss";

function Certifications() {
  return (
    <section className="section container certifications" aria-labelledby="certifications-heading">
      <div className="section-head">
        <div>
          <p className="eyebrow">Certifications</p>
          <h2 id="certifications-heading">Certified and verified</h2>
        </div>
        <p className="section-head__aside">Verified badges on Credly</p>
      </div>

      <ul className="cert-list">
        {certifications.map((certification) => (
          <li className="cert" key={certification.name}>
            <div className="cert__badge">
              <img
                src={certification.badgeImage}
                alt={certification.badgeAlt}
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="cert__body">
              <p className="cert__issuer mono">{certification.issuer}</p>
              <h3 className="cert__name">{certification.name}</h3>
              <p className="cert__level">{certification.level}</p>
            </div>

            <a
              className="link cert__link"
              href={certification.credentialUrl}
              target="_blank"
              rel="noreferrer"
            >
              Verify credential
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Certifications;
