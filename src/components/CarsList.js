import React from "react";
import { Helmet } from "react-helmet";

import SidebarCarsList from "./SidebarCarsList";
import Cars from "../routes/Cars";

const CarsList = () => {
  return (
    <div className="cars-list">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Авто в навності - Cars io</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <SidebarCarsList />
      <Cars />
    </div>
  );
};

export default CarsList;
