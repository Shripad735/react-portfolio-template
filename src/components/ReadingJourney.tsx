import React from "react";
import "../assets/styles/ReadingJourney.scss";

function ReadingJourney() {
  return (
    <div className="reading-journey-container" id="reading">
      <h1>My Reading Journey</h1>
      <p>
        Beyond building software and exploring new technologies, I&apos;m passionate about reading. I enjoy diving into biographies, philosophy, mythology, and other impactful genres. Books continually shape my thinking, influence my creativity, and inspire how I approach my work.
      </p>
      <p>
        Explore my complete reading list and reviews on{" "}
        <a href="https://www.goodreads.com/user/show/195633318-shripad-khandare" target="_blank" rel="noreferrer">
          Goodreads
        </a>
        .
      </p>
    </div>
  );
}

export default ReadingJourney;
