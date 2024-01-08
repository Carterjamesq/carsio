// PublishedCar.js
import React from "react";

const PublishedCar = ({ carData }) => {
  return (
    <div>
      <h2>Published Car Details</h2>
      <p>Make: {carData.make}</p>
      <p>Model: {carData.model}</p>
      <p>Year: {carData.year}</p>
      <p>Price: {carData.price}</p>
      {carData.image && <img src={carData.image} alt="Car" />}
    </div>
  );
};

export default PublishedCar;
