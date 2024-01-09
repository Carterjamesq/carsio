import React from "react";
import { useParams } from "react-router-dom";

const CarDetails = () => {
  const { make, model } = useParams();

  // Fetch detailed information about the car using make and model
  // (You may need to update this part based on your data fetching logic)

  return (
    <div>
      <h1>Car Details</h1>
      <p>Make: {make}</p>
      <p>Model: {model}</p>
    </div>
  );
};

export default CarDetails;
