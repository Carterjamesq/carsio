import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { PiEngineBold } from "react-icons/pi";
import { TbManualGearbox } from "react-icons/tb";
import { IoColorFillOutline } from "react-icons/io5";
import SidebarCarsList from "./SidebarCarsList";
import cars from "../dataset/cars";

const CarsList = () => {
  const [selectedOption, setSelectedOption] = useState("Newest");

  const options = [
    "A-Z",
    "Newest",
    "Top view",
    "Price: low to high",
    "Price: high to low",
  ];

  const handleDropdownChange = (selected) => {
    setSelectedOption(selected.value);
  };

  const filteredCars = () => {
    switch (selectedOption) {
      case "Newest":
        return cars.slice().sort((a, b) => b.year - a.year);

      // Add more cases for other filter options
      case "Price: low to high":
        return cars.slice().sort((a, b) => a.price - b.price);
      case "Price: high to low":
        return cars.slice().sort((a, b) => b.price - a.price);
      default:
        return cars.slice().sort((a, b) => a.make.localeCompare(b.make));
    }
  };

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
          <Dropdown
            options={options}
            value={selectedOption}
            onChange={handleDropdownChange}
            placeholder="Select an option"
          />
        </div>
        <ul className="cars-cards">
          {filteredCars().map((car) => (
            <li className="car-card" key={car.id}>
              <div className="card-image">
                <img src={car.image} alt={`${car.make} ${car.model}`} />
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
