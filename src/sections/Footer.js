import React from "react";
import { Link } from "react-scroll";
import { SMOOTH_SCROLL_DURATION } from "../constants";
import SocialLinks from "../components/SocialLinks";

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

      <SocialLinks />

      <div className="copyright">
        Maxim Davydov <span className="copyright-year">©2020</span>
      </div>
    </footer>
  );
};

export default Footer;
