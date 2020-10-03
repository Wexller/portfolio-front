import React from "react";

const Navigation = ({ desktop, navList }) => {
  return (
    <div className={desktop ? "grid" : "mobile-navigation"}>
      <ul className={desktop ? "desktop-nav-list" : "mobile-nav-list"}>
        {navList.map((item, idx) => (
          <li className="nav-item" key={idx}>
            <a className="nav-item__link" href={item.to}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;