import React from "react";
import Currency from "./Currency";
import Notifications from "./Notifications";
import { CiHeart } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";

import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <div className="top-nav">
      <div className="container">
        <Currency />
        <div className="top-nav_column">
          <Notifications />
          <Link to="/favourites">
            <CiHeart />
          </Link>
          <Link to="/profile">
            <CgProfile />
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
