import React, { useEffect, useState } from "react";
import NavigationList from "./NavigationList";

const navList = [
  {
    title: "Главная",
    name: "intro",
  },
  {
    title: "Обо мне",
    name: "about",
  },
  {
    title: "Проекты",
    name: "projects",
  },
  {
    title: "Связаться",
    name: "contact",
  },
];

const Navigation = ({ introRef }) => {
  const [fixed, setFixed] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const current = introRef.current;

      if (
        current &&
        current["childBindings"] &&
        current["childBindings"]["domNode"]
      ) {
        const { bottom } = current["childBindings"][
          "domNode"
        ].getBoundingClientRect();
        const offset = 10;

        setFixed(bottom - offset <= 0);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, [introRef]);

  function hamburgerClickHandler() {
    setIsMenuOpen((isMenuOpen) => !isMenuOpen);
  }

  function linkClickHandler() {
    if (isMenuOpen) setIsMenuOpen((isMenuOpen) => !isMenuOpen);
  }

  return (
    <nav className={`navigation${fixed ? " fixed" : ""}`}>
      <NavigationList isDesktop={true} navList={navList} />

      <button
        className={`hamburger hamburger--collapse${
          isMenuOpen ? " is-active" : ""
        }`}
        onClick={hamburgerClickHandler}
        type="button"
      >
        <span className="hamburger-box">
          <span className="hamburger-inner" />
        </span>
      </button>

      <NavigationList
        isDesktop={false}
        navList={navList}
        isMenuOpen={isMenuOpen}
        linkClickHandler={linkClickHandler}
      />
    </nav>
  );
};

export default Navigation;
