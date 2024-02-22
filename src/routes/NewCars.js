import React, { useEffect, useState } from "react";
import { fetchContent } from "../dataset/carsDB";

const NewCars = () => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchContent();

      // Filter out cars older than 2015
      const filteredData = data.filter((item) => item.fields.year >= 2015);

      // Sort the filtered data by year in descending order
      const sortedData = filteredData.sort(
        (a, b) => b.fields.year - a.fields.year
      );

      setContent(sortedData);
    };

    fetchData();
  }, []);
  return (
    <div className="new-cars">
      <h1>Нові авто</h1>
      <ul>
        {content.map((item) => (
          <li key={item.sys.id}>
            <img src={item.fields.carImage.fields.file.url} />
            <h2>{item.fields.make}</h2>
            <p>{item.fields.year}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewCars;
