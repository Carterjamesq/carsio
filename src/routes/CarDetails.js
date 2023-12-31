import React from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import cars from "../dataset/cars";

const CarDetails = () => {
  // Get the make and model from the route parameters
  const { "*": makeModel } = useParams();
  const [make, model] = makeModel.split("-");

  // Find the car with the matching make and model
  const car = cars.find(
    (car) =>
      car.make.toLowerCase() === make.toLowerCase() &&
      car.model.toLowerCase() === model.toLowerCase()
  );

  // Render a message if the car is not found
  if (!car) {
    return <div>Car not found</div>;
  }
  return (
    <div className="car-details">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {car.make} - {car.model}
        </title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <h1>
        {car.make}-{car.model}
      </h1>
      <div>
        <img
          src={car.image}
          alt={`${car.make} ${car.model}`}
          style={{ maxWidth: "100%" }}
        />
        <h2>Specs:</h2>
        <p>Year: {car.year}</p>
        <p>Transmission: {car.transmission}</p>
        <p>Fuel Type: {car.fuel_type}</p>
        <p>Color: {car.color}</p>
        <p>Mileage: {car.mileage}</p>
        <p>VIN: {car.vin}</p>
        <p>Price: ${car.price}</p>
        <div>Sale: {car.sale}</div>
      </div>
    </div>
  );
};

export default CarDetails;
