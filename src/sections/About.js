import React from "react";
import { Element } from "react-scroll";
import Technologies from "../components/Technologies";
import Advantages from "../components/Advantages";
import image from "../images/HexagonPhoto.png";

const About = () => {
  return (
    <Element name="about" className="section-about">
      <div className="section-title">Обо мне</div>

      <Advantages />

      <div className="grid about-description">
        <div className="about-introduction">
          <div className="about-introduction__photo">
            <img src={image} alt="Maxim Davydov" />
          </div>

          <div className="about-introduction__title">Кто этот парень?</div>

          <div className="about-introduction__description">
            Я <span className="important">Full-Stack</span> разрабочик в
            компании{" "}
            <a href="//sinergo.ru" rel="noopener noreferrer" target="_blank">
              Синерго&nbsp;
            </a>
            (Кемерово &mdash; Кузбасс) и хочу переехать в Москву. Я занимаюсь
            Web разработкой с начала 2019 года. У меня есть несколько
            завершенных проектов, сделанных на&nbsp;
            <span className="important">Bitrix</span> и&nbsp;
            <span className="important">Ruby on Rails</span>. В последнее время
            я стал тяготеть в сторону&nbsp;
            <span className="important">Full-Stack JavaScript</span>&nbsp;
            разработчика (React, Vue, NodeJS).
            <br />
            <a href="/">Свяжитесь со мной, если у вас есть предложение.</a>
          </div>
        </div>
        <div className="about-technologies">
          <Technologies />
        </div>
      </div>
    </Element>
  );
};

export default About;
