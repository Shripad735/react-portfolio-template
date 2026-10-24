import React from "react";
import { readingNote } from "../data/writing";
import { socials } from "../data/profile";
import "../assets/styles/ReadingJourney.scss";

const goodreads = socials.find((social) => social.label === "Goodreads");

function ReadingJourney() {
  return (
    <section className="section container reading" aria-labelledby="reading-heading">
      <header className="page-head">
        <p className="eyebrow">Reading</p>
        <h1 id="reading-heading">Away from the screen</h1>
        <p className="lede">
          I read a fair amount, and not only technical books. Biographies, philosophy, and
          mythology take up most of the shelf.
        </p>
      </header>

      <div className="reading__grid">
        <div className="reading__prose">
          {readingNote.text.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>

        <aside className="reading__aside">
          <p className="reading__label mono">Shelves</p>
          <ul className="tags reading__genres">
            {readingNote.genres.map((genre) => (
              <li key={genre}>{genre}</li>
            ))}
          </ul>

          {goodreads && (
            <p className="reading__link">
              <a className="link" href={goodreads.href} target="_blank" rel="noreferrer">
                Full shelf on Goodreads
              </a>
            </p>
          )}
        </aside>
      </div>
    </section>
  );
}

export default ReadingJourney;
