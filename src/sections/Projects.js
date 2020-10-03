import React from "react";
import { Element } from "react-scroll";

const Projects = () => {
  return (
    <Element className="section-projects" name="projects">
      <div className="section-title">Проекты</div>

      <div className="grid">
        <ul className="project-categories">
          <li className="category-item active">
            <a className="category-item__link" href="#">
              Все
            </a>
          </li>
          <li className="category-item">
            <a className="category-item__link" href="#">
              Ruby/Rails
            </a>
          </li>
          <li className="category-item">
            <a className="category-item__link" href="#">
              Bitrix
            </a>
          </li>
          <li className="category-item">
            <a className="category-item__link" href="#">
              JavaScript
            </a>
          </li>
        </ul>
      </div>

      <div className="grid project-list">
        <div className="project-item">
          <div className="project-view">
            <div className="project-info">
              <div className="project-title">
                Современная машиностроительная компания
              </div>
              <div className="project-stack">Bitrix / JavaScript</div>
            </div>

            <div className="project-more-button">
              <button className="base-button bronze">Подробнее</button>
            </div>
          </div>
        </div>

        <div className="project-item">
          <div className="project-view">
            <div className="project-info">
              <div className="project-title">Imom's</div>
              <div className="project-stack">Rails / JavaScript</div>
            </div>

            <div className="project-more-button">
              <button className="base-button bronze">Подробнее</button>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Projects;
