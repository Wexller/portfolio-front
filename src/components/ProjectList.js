import React, { useCallback, useEffect, useState } from "react";
import { useProjectCategory } from "../contexts/CategoriesContext";
import { useHttp } from "../hooks/http.hook";

const ProjectList = () => {
  const {
    category,
    setProjectDetailIsOpen,
    setProjectId,
  } = useProjectCategory();
  const { request } = useHttp();
  const [projects, setProjects] = useState([]);

  const fetchProjects = useCallback(async () => {
    const fetchedProjects = await request("/api/project");

    if (fetchedProjects) {
      fetchedProjects.forEach((fetchedProject, idx) => {
        fetchedProjects[idx]["projectCategories"] = fetchedProject[
          "Categories"
        ].map((c) => c["name"]);
      });

      setProjects(fetchedProjects);
    }
  }, [request]);

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  function clickHandler(id) {
    setProjectId(id);
    setProjectDetailIsOpen(true);
  }

  function joinCategories(item) {
    let result = [];

    if (item["Categories"] && item["Categories"].length) {
      result = item["Categories"].map((c) => c["title"]);
    }

    return result.join(" / ");
  }

  return (
    <div className="grid project-list">
      {projects.map((item) => {
        if (category !== "all" && !item.projectCategories.includes(category)) {
          return null;
        }

        return (
          <div
            className="project-item"
            key={item.id}
            style={{ backgroundImage: `url(${item.previewImage})` }}
          >
            <div className="project-view">
              <div className="project-info">
                <div className="project-title">{item.title}</div>
                <div className="project-stack">{joinCategories(item)}</div>
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
