import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import gcpAceBadge from "../assets/images/associate-cloud-engineer-certification.png";
import awsCcpBadge from "../assets/images/aws-certified-cloud-practitioner.png";
import "../assets/styles/Certifications.scss";

const certifications = [
  {
    name: "Google Cloud Certified Associate Cloud Engineer",
    issuer: "Google Cloud",
    level: "Associate level",
    credentialUrl:
      "https://www.credly.com/badges/2709b0c2-f87a-4712-983b-70646dde914e/public_url",
    badgeImage: gcpAceBadge,
    badgeAlt: "Google Cloud Certified Associate Cloud Engineer badge",
  },
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    level: "Foundational level",
    credentialUrl:
      "https://www.credly.com/badges/ab5f7c89-d3ec-4b97-8699-7ea2c5f7be80/public_url",
    badgeImage: awsCcpBadge,
    badgeAlt: "AWS Certified Cloud Practitioner badge",
  },
];

function Certifications() {
  return (
    <section className="certifications-container" id="certifications">
      <div className="certifications-header">
        <h1>Certifications</h1>
      </div>

      <div className="certifications-grid">
        {certifications.map((certification) => (
          <article className="certification-card" key={certification.name}>
            <div className="certification-badge">
              <img
                className="certification-badge-image"
                src={certification.badgeImage}
                alt={certification.badgeAlt}
                loading="lazy"
              />
            </div>

            <div className="certification-details">
              <span className="certification-name">{certification.name}</span>
              <span className="certification-issuer">
                {certification.issuer}
              </span>
              <span className="certification-level">{certification.level}</span>
            </div>

            <a
              className="certification-link"
              href={certification.credentialUrl}
              target="_blank"
              rel="noreferrer"
            >
              Verify <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
