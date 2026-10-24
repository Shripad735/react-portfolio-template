import React from "react";
import { areas } from "../data/areas";
import "../assets/styles/Expertise.scss";

function Expertise() {
  return (
    <section className="section container expertise" aria-labelledby="expertise-heading">
      <header className="page-head">
        <p className="eyebrow">Expertise</p>
        <h1 id="expertise-heading">What I work with</h1>
        <p className="lede">
          Five areas, roughly in the order I spend time on them. The tools matter less than the
          habits around them: define the interface, check the input, log the failure, write down
          the fix.
        </p>
      </header>

      <div className="expertise__list">
        {areas.map((area) => (
          <article className="area" key={area.id} id={area.id}>
            <div className="area__rail" aria-hidden="true">
              <span className="area__index mono">{area.index}</span>
              <span className="area__line" />
            </div>

            <div className="area__body">
              <h2 className="area__title">{area.title}</h2>
              <p className="area__summary">{area.summary}</p>
              <ul className="tags area__stack" aria-label={`${area.title} tools`}>
                {area.stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Expertise;
