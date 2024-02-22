import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { IoCarSportOutline } from "react-icons/io5";

const Favourites = () => {
  return (
    <div className="favourites">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Carsio - Додані</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <h1>Додані авто</h1>
      <div>
        <h2>Ви ще не додали жодного авто до вибраного</h2>
      </div>
      <Link className="btn-primary" to="/cars">
        <IoCarSportOutline />
        Переглянути авто
      </Link>
    </div>
  );
};

export default Favourites;
