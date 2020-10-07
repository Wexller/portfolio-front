import React, { useCallback, useEffect, useState } from "react";
import { useCategory } from "../contexts/CategoriesContext";
import { useHttp } from "../hooks/http.hook";

const allCategories = {
  name: "all",
  title: "Все",
};

const ProjectCategories = () => {
  const { category, setCategory } = useCategory();
  const { request } = useHttp();
  const [categoryList, setCategoryList] = useState([allCategories]);

  const fetchCategories = useCallback(async () => {
    const response = await request("/api/category");
    setCategoryList([allCategories, ...response]);
  }, [request]);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  function categoryClickHandler(name) {
    setCategory(name);
  }

  return (
    <div className="grid">
      <ul className="project-categories">
        {categoryList.map((item, idx) => (
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
