import React, { useRef } from "react";
import Navigation from "../components/Navigation";

const Intro = () => {
  const sectionIntroRef = useRef(null);

  return (
    <section className="section-intro" ref={sectionIntroRef}>
      <div className="lines">
        <div className="line" />
        <div className="line" />
        <div className="line" />
      </div>

      <div className="title">
        <div className="text">
          <div className="text__hello-name">
            <div className="hello">Привет, меня зовут&nbsp;</div>
            <div className="name">&lt; Максим Давыдов /&gt;</div>
          </div>
          <div>Я Full-Stack Web разработчик</div>
        </div>

        <button className="base-button button-more">
          <span>Подробнее</span>
          <span className="mdi mdi-arrow-right" />
        </button>
      </div>

      <Navigation sectionIntroRef={sectionIntroRef} />
    </section>
  );
};

export default Intro;
