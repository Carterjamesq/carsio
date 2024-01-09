import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import { fetchContent } from "../dataset/carsDB";

import { PiEngineBold } from "react-icons/pi";
import { TbManualGearbox } from "react-icons/tb";
import { IoColorFillOutline } from "react-icons/io5";

const Cars = () => {
  const [content, setContent] = useState([]);
  const [sortingOption, setSortingOption] = useState("Please select sort"); // Set default sorting option
  const [selectedFilter, setSelectedFilter] = useState("");
  const initialContentRef = useRef([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchContent();
      setContent(data);
      initialContentRef.current = data;
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Apply filter logic here if needed based on selectedFilter
    const sortedArray = sortContent(initialContentRef.current);
    setContent(sortedArray);
  }, [sortingOption, selectedFilter]);

  const sortContent = (data) => {
    switch (sortingOption) {
      case "A-Z":
        return [
          ...data.sort((a, b) => a.fields.make.localeCompare(b.fields.make)),
        ];

      case "Newest":
        return [
          ...data.sort(
            (a, b) => new Date(b.fields.year) - new Date(a.fields.year)
          ),
        ];
      case "Oldest":
        return [
          ...data.sort(
            (a, b) => new Date(a.fields.year) - new Date(b.fields.year)
          ),
        ];
      case "PriceHighToLow":
        return [...data.sort((a, b) => b.fields.price - a.fields.price)];
      case "PriceLowToHigh":
        return [...data.sort((a, b) => a.fields.price - b.fields.price)];
      default:
        return data;
    }
  };

  const handleSortChange = (event) => {
    setSortingOption(event.target.value);
  };

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };
  return (
    <div>
      <div className="filter-form">
        <select value={sortingOption} onChange={handleSortChange}>
          <option value="">Please Select Sorting</option>
          <option value="A-Z">A-Z</option>
          <option value="Newest">From New to Old</option>
          <option value="Oldest">From Old to New</option>
          <option value="PriceHighToLow">Price High to Low</option>
          <option value="PriceLowToHigh">Price Low to High</option>
        </select>
      </div>
      <div className="cars">
        <ul className="cars-cards">
          {content.map((item) => (
            <li className="car-card" key={item.sys.id}>
              <div className="card-image">
                <img
                  src={item.fields.carImage.fields.file.url}
                  alt={item.fields.carImage.fields.make || "Car Image"}
                />
              </div>
              <div className="card-body">
                <div className="card-header">
                  <div>
                    <h3>{item.fields.make}</h3>
                    <h5>{item.fields.model}</h5>
                  </div>
                  <p>
                    <b>{item.fields.year}</b>
                  </p>
                </div>
                <div className="car-specifications">
                  <div className="card-flex">
                    <TbManualGearbox />
                    <p>{item.fields.transmission}</p>
                  </div>
                  <div className="card-flex">
                    <PiEngineBold />
                    <p>{item.fields.fuelType}</p>
                  </div>
                  <div className="card-flex">
                    <IoColorFillOutline />
                    <p>{item.fields.color}</p>
                  </div>
                </div>
                <p>Mileage: {item.fields.mileage}</p>
                <p>VIN: {item.fields.vin}</p>
                <div className="card-footer">
                  <button className="btn-primary">Details</button>
                  <h3 className="price">${item.fields.price}</h3>
                </div>
                <div className="sale">{item.fields.salePrice}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Cars;
