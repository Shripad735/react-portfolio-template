import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faCertificate } from "@fortawesome/free-solid-svg-icons";
import "../assets/styles/Certifications.scss";

function Certifications() {
  return (
    <section className="certifications-container" id="certifications">
      <div className="certifications-header">
        <h1>Certifications</h1>
      </div>
      <a
        className="certification-card"
        href="https://www.credly.com/badges/ab5f7c89-d3ec-4b97-8699-7ea2c5f7be80/linked_in_profile"
        target="_blank"
        rel="noreferrer"
      >
        <span className="certification-mark" aria-hidden="true">
          <FontAwesomeIcon icon={faCertificate} />
        </span>
        <span className="certification-details">
          <span className="certification-name">AWS Certified Cloud Practitioner</span>
          <span className="certification-issuer">Amazon Web Services</span>
        </span>
        <span className="certification-link">
          Verify <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </span>
      </a>
    </section>
  );
}

export default Certifications;
