import React from "react";
import { Helmet } from "react-helmet";

const SellCar = () => {
  return (
    <div className="sell-car">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Carsio - Продати авто</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <h1>Продаж авто онлайн</h1>
      <div className="sell-car-wrapper">
        <h2>Продати авто</h2>
        <h4>Додайте інформацію</h4>
        <p>Додайте параметри вашого авто</p>
      </div>
    </div>
  );
};

export default SellCar;
