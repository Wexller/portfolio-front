import React, { createContext, useContext, useState } from "react";

export const ProjectCategoryContext = createContext({});
export const useProjectCategory = () => useContext(ProjectCategoryContext);

export function ProjectCategoryProvider({ children }) {
  const [category, setCategory] = useState("all");
  const [projectDetailIsOpen, setProjectDetailIsOpen] = useState(false);
  const [projectId, setProjectId] = useState(null);

  return (
    <ProjectCategoryContext.Provider
      value={{
        category,
        setCategory,
        projectDetailIsOpen,
        setProjectDetailIsOpen,
        projectId,
        setProjectId,
      }}
    >
      {children}
    </ProjectCategoryContext.Provider>
  );
}
