import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { IoCarSportOutline } from "react-icons/io5";

const Favourites = () => {
  return (
    <div className="favourites">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Carsio - Favourites</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <h1>Favourites</h1>
      <div>
        <h2>You have not yet added any ad to your favorites</h2>
        <p>
          Save interesting offers to track prices and quickly find what you
          like.
        </p>
      </div>
      <Link className="btn-primary" to="/cars">
        <IoCarSportOutline />
        Cars
      </Link>
    </div>
  );
};

export default Favourites;
