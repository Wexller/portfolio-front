import React, { createContext, useContext, useState } from "react";

export const CategoryContext = createContext({});
export const useCategory = () => useContext(CategoryContext);

export function CategoryProvider({ children }) {
  const [category, setCategory] = useState("all");

  return (
    <CategoryContext.Provider value={{ category, setCategory }}>
      {children}
    </CategoryContext.Provider>
  );
}
