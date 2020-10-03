import React, { useEffect, useRef, useState } from "react";
import NavigationList from "./NavigationList";

const navList = [
  {
    name: "Главная",
    to: "#",
  },
  {
    name: "Обо мне",
    to: "#",
  },
  {
    name: "Проекты",
    to: "#",
  },
  {
    name: "Связаться",
    to: "#",
  },
];

const Navigation = ({ sectionIntroRef }) => {
  const [fixed, setFixed] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    if (sectionIntroRef.current) {
      setFixed(sectionIntroRef.current.getBoundingClientRect().bottom <= 0);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);

  function hamburgerClickHandler() {
    setIsMenuOpen((isMenuOpen) => !isMenuOpen);
  }

  return (
    <nav className={`navigation${fixed ? " fixed" : ""}`}>
      <NavigationList desktop={true} navList={navList} />

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
        desktop={false}
        navList={navList}
        isMenuOpen={isMenuOpen}
      />
    </nav>
  );
};

export default Navigation;
