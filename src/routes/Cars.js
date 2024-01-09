import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { fetchContent } from "../dataset/carsDB";

import { PiEngineBold } from "react-icons/pi";
import { TbManualGearbox } from "react-icons/tb";
import { IoColorFillOutline } from "react-icons/io5";

const Cars = () => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchContent();
      setContent(data);
    };

    fetchData();
  }, []);
  return (
    <div>
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
                  <h3>{item.fields.make}</h3>
                  <h5>{item.fields.model}</h5>
                  <p>{item.fields.year}</p>
                </div>
                <div className="car-specifications">
                  <div className="card-flex">
                    <TbManualGearbox />
                    <p>{item.fields.transmission}</p>
                  </div>
                  <div className="card-flex">
                    <PiEngineBold />
                    <p>{item.fields.fuel_type}</p>
                  </div>
                  <div className="card-flex">
                    <IoColorFillOutline />
                    <p>{item.fields.color}</p>
                  </div>
                </div>
                <p>Mileage: {item.fields.mileage}</p>
                <p>VIN: {item.fields.vin}</p>
                <div className="card-footer">
                  <Link
                    to={`/cars/${encodeURIComponent(
                      item.fields.make.toLowerCase()
                    )}-${encodeURIComponent(item.fields.model.toLowerCase())}`}
                    className="btn-primary"
                  >
                    Details
                  </Link>
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
