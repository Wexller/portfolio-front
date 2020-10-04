import React from "react";
import { useCategory } from "../contexts/CategoriesContext";

const projects = [
  {
    title: "Современная машиностроительная компания",
    categories: ["Bitrix", "JavaScript"],
    id: 1,
  },
  {
    title: "Imom's",
    categories: ["Rails", "JavaScript"],
    id: 2,
  },
  {
    title: "ЕВРАЗ Аукционы",
    categories: ["Bitrix", "Vue", "JavaScript"],
    id: 3,
  },
];

const ProjectList = () => {
  const { category } = useCategory();

  function clickHandler(id) {}

  return (
    <div className="grid project-list">
      {projects.map((item) => {
        if (category !== "all" && !item.categories.includes(category)) {
          return;
        }

        return (
          <div className="project-item" key={item.id}>
            <div className="project-view">
              <div className="project-info">
                <div className="project-title">{item.title}</div>
                <div className="project-stack">
                  {item.categories.join(" / ")}
                </div>
              </div>

              <div className="project-more-button">
                <button
                  className="base-button bronze"
                  onClick={() => clickHandler(item.id)}
                >
                  Подробнее
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectList;
