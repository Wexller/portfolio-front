import React from "react";
import { Element } from "react-scroll";
import ProjectCategories from "../components/ProjectCategories";
import ProjectList from "../components/ProjectList";
import { CategoryProvider } from "../contexts/CategoriesContext";

const Projects = () => {
  return (
    <Element className="section-projects" name="projects">
      <div className="section-title">Проекты</div>

      <CategoryProvider>
        <ProjectCategories />
        <ProjectList />
      </CategoryProvider>
    </Element>
  );
};

export default Projects;
