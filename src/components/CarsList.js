import React from "react";
import { Helmet } from "react-helmet";

import { Link } from "react-router-dom";

import cars from "../dataset/cars";

import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

import { PiEngineBold } from "react-icons/pi";
import { TbManualGearbox } from "react-icons/tb";
import { IoColorFillOutline } from "react-icons/io5";
import SidebarCarsList from "./SidebarCarsList";

const CarsList = () => {
  const options = [
    "A-Z",
    "Newest",
    "Related",
    "Top view",
    "Price: low to high",
    "Price: high to low",
  ];

  return (
    <div className="cars-list">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Carslist - Cars io</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <SidebarCarsList />
      <div className="cars">
        <div className="header-dropdown">
          <h1>Cars List</h1>
          <Dropdown options={options} placeholder="Select an option" />
        </div>
        <ul className="cars-cards">
          {cars &&
            cars.map((car) => (
              <li className="car-card" key={car.id}>
                <div className="card-image">
                  <img src={car.image} />
                </div>
                <div className="card-body">
                  <div className="card-header">
                    <h3>{car.make}</h3>
                    <h5>{car.model}</h5>
                    <p>{car.year}</p>
                  </div>
                  <div className="car-specifications">
                    <div className="card-flex">
                      <TbManualGearbox />
                      <p>{car.transmission}</p>
                    </div>
                    <div className="card-flex">
                      <PiEngineBold />
                      <p>{car.fuel_type}</p>
                    </div>
                    <div className="card-flex">
                      <IoColorFillOutline />
                      <p>{car.color}</p>
                    </div>
                  </div>

                  <p>Mileage: {car.mileage}</p>
                  <p>VIN: {car.vin}</p>
                  <div className="card-footer">
                    <Link
                      to={`/cars/${encodeURIComponent(
                        car.make.toLowerCase()
                      )}-${encodeURIComponent(car.model.toLowerCase())}`}
                      className="btn-primary"
                    >
                      Details
                    </Link>
                    <h3 className="price">${car.price}</h3>
                  </div>
                  <div className="sale">{car.sale}</div>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default CarsList;
