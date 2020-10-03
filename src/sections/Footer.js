import React from "react";
import { Link } from "react-scroll";
import { SMOOTH_SCROLL_DURATION } from "../constants";

const Footer = () => {
  return (
    <footer>
      <Link
        className="button-scroll-top"
        to="intro"
        smooth={true}
        duration={SMOOTH_SCROLL_DURATION}
      >
        <span className="mdi mdi-chevron-double-up" />
      </Link>

      <div className="social-block">
        <a
          href="//github.com/wexller"
          target="_blank"
          rel="noopener noreferrer"
          className="social-item"
        >
          <span className="mdi mdi-github" />
        </a>

        <a
          href="//www.linkedin.com/in/maxim-davydov-0b1356183/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-item"
        >
          <span className="mdi mdi-linkedin" />
        </a>

        <a href="mailto:maxim.davydov.94@gmail.com" className="social-item">
          <span className="mdi mdi-email" />
        </a>

        <a
          href="//www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-item"
        >
          <span className="mdi mdi-instagram" />
        </a>
      </div>

      <div className="copyright">
        Maxim Davydov <span className="copyright-year">©2020</span>
      </div>
    </footer>
  );
};

export default Footer;
