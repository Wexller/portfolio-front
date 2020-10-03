import React from "react";
import Navigation from "../components/Navigation";

const navList = [
  {
    name: "Главная",
    to: "#",
  },
  {
    name: "Обо мне",
    to: "#",
  },
  {
    name: "Проекты",
    to: "#",
  },
  {
    name: "Связаться",
    to: "#",
  },
];

const Intro = () => {
  return (
    <section className="section-intro">
      <div className="lines">
        <div className="line" />
        <div className="line" />
        <div className="line" />
      </div>

      <div className="title">
        <div className="text">
          <div className="text__hello-name">
            <div className="hello">Привет, меня зовут&nbsp;</div>
            <div className="name">&lt; Максим Давыдов &sol;&gt;</div>
          </div>
          <div>Я Full-Stack Web разработчик</div>
        </div>

        <button className="base-button button-more">
          <span>Подробнее</span>
          <span className="mdi mdi-arrow-right" />
        </button>
      </div>

      <nav className="navigation">
        <Navigation desktop={true} navList={navList} />

        <button className="hamburger hamburger--collapse" type="button">
          <span className="hamburger-box">
            <span className="hamburger-inner" />
          </span>
        </button>

        <Navigation desktop={false} navList={navList} />
      </nav>
    </section>
  );
};

export default Intro;
