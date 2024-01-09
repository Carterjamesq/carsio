// ExampleComponent.js
import React, { useEffect, useState } from "react";
import { fetchContent } from "../dataset/carsDB";

const ExampleComponent = () => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchContent();
      setContent(data);
    };

    fetchData();
  }, []);

  return (
    <div className="cars-list">
      <ul className="cars-cards">
        {content.map((item) => (
          <li className="car-card" key={item.sys.id}>
            <img
              src={item.fields.carImage.fields.file.url}
              alt={item.fields.carImage.fields.make || "Car Image"}
            />
            <p>{item.fields.make}</p>
            <p>{item.fields.model}</p>
            <p>{item.fields.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExampleComponent;
