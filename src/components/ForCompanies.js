import React from "react";
import { Link } from "react-router-dom";
import { IoCarSportOutline } from "react-icons/io5";

const ForCompanies = () => {
  return (
    <div className="for-companies">
      <h1>For Companies</h1>
      <p>Coming Soon ...</p>
      <Link className="btn-primary" to="/cars">
        <IoCarSportOutline />
        Cars
      </Link>
    </div>
  );
};

export default ForCompanies;
