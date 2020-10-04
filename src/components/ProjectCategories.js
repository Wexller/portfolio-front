import React from "react";
import { useCategory } from "../contexts/CategoriesContext";

const categories = [
  {
    name: "all",
    title: "Все",
  },
  {
    name: "Rails",
    title: "Ruby/Rails",
  },
  {
    name: "Bitrix",
    title: "Bitrix",
  },
  {
    name: "JavaScript",
    title: "JavaScript",
  },
];

const ProjectCategories = () => {
  const { category, setCategory } = useCategory();

  function categoryClickHandler(name) {
    setCategory(name);
  }

  return (
    <div className="grid">
      <ul className="project-categories">
        {categories.map((item, idx) => (
          <li
            className={`category-item${
              category === item.name ? " active" : ""
            }`}
            key={idx}
          >
            <button
              className="category-item__button"
              onClick={() => categoryClickHandler(item.name)}
            >
              {item.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectCategories;
