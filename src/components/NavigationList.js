import React from "react";
import { Link } from "react-scroll";
import { SMOOTH_SCROLL_DURATION } from "../constants";

const NavigationList = ({
  isDesktop,
  navList,
  isMenuOpen,
  linkClickHandler,
}) => {
  return (
    <div
      className={
        isDesktop ? "grid" : `mobile-navigation${isMenuOpen ? " active" : ""}`
      }
    >
      <ul className={isDesktop ? "desktop-nav-list" : "mobile-nav-list"}>
        {navList.map((item, idx) => (
          <li className="nav-item" key={idx}>
            <Link
              className="nav-item__link"
              activeClass="active"
              to={item.name}
              spy={true}
              smooth={true}
              duration={SMOOTH_SCROLL_DURATION}
              onClick={linkClickHandler}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavigationList;
