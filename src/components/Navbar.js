import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/Logo.svg";

import { IoCarSportOutline } from "react-icons/io5";
import { IoPeopleOutline } from "react-icons/io5";
import { IoBookmarksOutline } from "react-icons/io5";
import { BsHouse } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { GoRss } from "react-icons/go";
import { PiStorefrontLight } from "react-icons/pi";
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
      if (showNavbar && !event.target.closest(".nav-container")) {
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
      <div className="nav-container">
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
            <Link className="nav-item" to="/" onClick={handleLinkClick}>
              <BsHouse />
              Home
            </Link>
            <Link className="nav-item" to="/cars" onClick={handleLinkClick}>
              <IoCarSportOutline />
              Cars
            </Link>
            <Link className="nav-item" to="/about" onClick={handleLinkClick}>
              <IoPeopleOutline />
              About
            </Link>
            <Link className="nav-item" to="/blog" onClick={handleLinkClick}>
              <IoBookmarksOutline />
              Blog
            </Link>
            <Link className="nav-item" to="/news" onClick={handleLinkClick}>
              <GoRss />
              News
            </Link>
            <div className="profile-sell">
              <Link to="sell-car" onClick={handleLinkClick}>
                <PiStorefrontLight />
                Sell car
              </Link>
              <Link className="px" to="for-companies" onClick={handleLinkClick}>
                <IoInformationCircleOutline />
                For companies
              </Link>
              <Link
                className="btn-primary"
                to="/profile"
                onClick={handleLinkClick}
              >
                <CgProfile />
                Profile
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default ResNavbar;
