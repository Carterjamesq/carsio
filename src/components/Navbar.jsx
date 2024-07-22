import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import Logo from "../assets/Logo.svg";

import { IoIosAddCircle } from "react-icons/io";

const ResNavbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const location = useLocation(); // Get current location

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const handleLinkClick = () => {
    setShowNavbar(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (showNavbar && !event.target.closest(".container")) {
        setShowNavbar(false);
      }
    };

    document.body.addEventListener("click", handleOutsideClick);

    return () => {
      document.body.removeEventListener("click", handleOutsideClick);
    };
  }, [showNavbar]);

  return (
    <nav className="site-navigation">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="Cars Logo" />
          </Link>
        </div>

        <div className="menu-icon" onClick={handleShowNavbar}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>

        <div className={`nav-elements ${showNavbar && "active"}`}>
          <ul className="nav-items">
            <Link
              className={`nav-item ${
                location.pathname === "/cars" && "active"
              }`}
              to="/cars"
              onClick={handleLinkClick}
            >
              Всі авто в продажі
            </Link>
            <Link
              className={`nav-item ${
                location.pathname === "/new-cars" && "active"
              }`}
              to="/new-cars"
              onClick={handleLinkClick}
            >
              Нові авто
            </Link>
            <Link
              className={`nav-item ${
                location.pathname === "/used-cars" && "active"
              }`}
              to="/used-cars"
              onClick={handleLinkClick}
            >
              Вживані авто
            </Link>
            <Link
              className={`nav-item ${
                location.pathname === "/about" && "active"
              }`}
              to="/about"
              onClick={handleLinkClick}
            >
              Про нас
            </Link>
            <div className="profile-sell">
              <Link
                className={`btn-primary sell-car ${
                  location.pathname === "/sell-car" && "active"
                }`}
                to="/sell-car"
                onClick={handleLinkClick}
              >
                <IoIosAddCircle />
                Продати авто
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default ResNavbar;
