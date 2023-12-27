import React from "react";
import { Link } from "react-router-dom";

import LogoFooter from "../assets/Logo White.svg";

const Footer = () => {
  const date = Date.now();

  return (
    <footer className="">
      <div className="container">
        <div className="brand">
          <Link to="/">
            <img src={LogoFooter} alt="Cars Logo" />
          </Link>
        </div>
        <div className="copyrights">
          <p>©</p>
          <p>
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
            }).format(date)}
          </p>
          <p>Cars.io</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
