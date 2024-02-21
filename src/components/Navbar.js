import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/Logo.svg";

import { IoIosAddCircle } from "react-icons/io";
import { IoInformationCircleOutline } from "react-icons/io5";

const ResNavbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const handleLinkClick = () => {
    setShowNavbar(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      // Check if the clicked element is outside the mobile menu
      if (showNavbar && !event.target.closest(".container")) {
        setShowNavbar(false);
      }
    };

    // Add event listener to the document body
    document.body.addEventListener("click", handleOutsideClick);

    // Remove event listener on component unmount
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

        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul className="nav-items">
            {/* <Link className="nav-item" to="/" onClick={handleLinkClick}>
              Home
            </Link> */}
            <Link className="nav-item" to="/cars" onClick={handleLinkClick}>
              Всі авто в продажі
            </Link>
            <Link className="nav-item" to="/new-cars" onClick={handleLinkClick}>
              Нові авто
            </Link>
            <Link
              className="nav-item"
              to="/used-cars"
              onClick={handleLinkClick}
            >
              Вживані авто
            </Link>
            <Link className="nav-item" to="/about" onClick={handleLinkClick}>
              Про нас
            </Link>
            <div className="profile-sell">
              {/* <Link className="px" to="for-companies" onClick={handleLinkClick}>
                For companies
              </Link> */}

              <Link
                className="btn-primary sell-car"
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
