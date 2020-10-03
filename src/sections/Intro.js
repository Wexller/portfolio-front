import React, { useRef } from "react";
import { Link, Element } from "react-scroll";
import Navigation from "../components/Navigation";
import { SMOOTH_SCROLL_DURATION } from "../constants";

const Intro = () => {
  const introRef = useRef(null);

  return (
    <Element name="intro" className="section-intro" ref={introRef}>
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

        <Link
          to="about"
          smooth={true}
          duration={SMOOTH_SCROLL_DURATION}
          className="base-button button-more"
        >
          <span>Подробнее</span>
          <span className="mdi mdi-arrow-right" />
        </Link>
      </div>

      <Navigation introRef={introRef} />
    </Element>
  );
};

export default Intro;
