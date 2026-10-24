import React from "react";
import { articles } from "../data/writing";
import { profile } from "../data/profile";
import "../assets/styles/Blogs.scss";

function Blogs() {
  return (
    <section className="section container writing" aria-labelledby="writing-heading">
      <header className="page-head">
        <p className="eyebrow">Writing</p>
        <h1 id="writing-heading">Notes on things I had to figure out</h1>
        <p className="lede">
          I write on Medium when something takes longer to understand than it should. Mostly cloud
          infrastructure, security, and whatever I have been learning about AI that week.
        </p>
      </header>

      <ol className="article-list">
        {articles.map((article, index) => (
          <li className="article" key={article.link}>
            <a className="article__link" href={article.link} target="_blank" rel="noreferrer">
              <span className="article__index mono" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="article__title">{article.title}</span>
              <span className="article__meta mono">
                {article.topic}
                <span className="article__sep" aria-hidden="true">
                  ,
                </span>
                {article.readingTime}
              </span>
              <span className="article__arrow" aria-hidden="true" />
            </a>
          </li>
        ))}
      </ol>

      <p className="writing__more">
        <a className="button button--ghost" href={profile.mediumHandle} target="_blank" rel="noreferrer">
          Everything on Medium
        </a>
      </p>
    </section>
  );
}

export default Blogs;
