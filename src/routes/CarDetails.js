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

  function shuffleArray(array) {
    // Fisher-Yates shuffle algorithm
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // Shuffle the cars array and take the first 4 items
  const shuffledCars = shuffleArray(cars).slice(0, 4);
  return (
    <div className="car-details">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {car.make} - {car.model}
        </title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <div className="car-details-content">
        <img
          src={car.image}
          alt={`${car.make} ${car.model}`}
          style={{ maxWidth: "100%" }}
        />
        <div className="car-specs-content">
          <h1>
            {car.make}-{car.model}
          </h1>
          <h2>Specs:</h2>
          <p>
            Year: <b>{car.year}</b>
          </p>
          <p>
            Transmission: <b>{car.transmission}</b>
          </p>
          <p>
            Fuel Type: <b>{car.fuel_type}</b>
          </p>
          <p>
            Color: <b>{car.color}</b>
          </p>
          <p>
            Mileage: <b>{car.mileage}</b>
          </p>
          <p>
            VIN: <b>{car.vin}</b>
          </p>
          <p>
            Price: $<b>{car.price}</b>
          </p>
          <div className="button-group">
            <button className="btn-primary">Rent A Car</button>
            <button className="btn-primary-outline">Chat with seller</button>
          </div>
        </div>
      </div>

      <div className="related-cars">
        <h2>Related Cars</h2>
        <ul>
          {shuffledCars.map((car) => (
            <li key={car.id}>
              <img src={car.image} alt={car.make} />
              <h4>{car.make}</h4>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CarDetails;
