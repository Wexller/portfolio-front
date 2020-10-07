import React from "react";
import { Element } from "react-scroll";
import ProjectCategories from "../components/ProjectCategories";
import ProjectList from "../components/ProjectList";
import { ProjectCategoryProvider } from "../contexts/CategoriesContext";
import ProjectDetail from "../components/ProjectDetail";

const Projects = () => {
  return (
    <Element className="section-projects" name="projects">
      <div className="section-title">Проекты</div>

      <ProjectCategoryProvider>
        <ProjectCategories />
        <ProjectList />
        <ProjectDetail />
      </ProjectCategoryProvider>
    </Element>
  );
};

export default Projects;
