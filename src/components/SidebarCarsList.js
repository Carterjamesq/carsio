import React, { useEffect, useState } from "react";

import { fetchContent } from "../dataset/carsDB";

import { Link } from "react-router-dom";

const SidebarCarsList = () => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchContent();
      setContent(data);
    };

    fetchData();
  }, []);
  return (
    <div className="carslist-widget">
      <div className="newest-cars">
        <h2>Newest cars</h2>
        {content.map &&
          content.slice(0, 2).map((widget) => (
            <div className="car-box" key={widget.sys.id}>
              <img
                src={widget.fields.carImage.fields.file.url}
                alt={widget.fields.make}
              />
              <div className="widget-card-header">
                <p>{widget.fields.make}</p>
                <p>{widget.fields.model}</p>
                <p>{widget.fields.year}</p>
              </div>
              <div className="widget-card-body">
                <Link className="btn-primary">Details</Link>
                <h3>${widget.fields.price}</h3>
              </div>
            </div>
          ))}
      </div>
      <div className="top-cars">
        <h2>Top cars</h2>
        {content &&
          content.slice(0, 2).map((widget) => (
            <div className="car-box" key={widget.sys.id}>
              <img
                src={widget.fields.carImage.fields.file.url}
                alt={widget.fields.make}
              />
              <div className="widget-card-header">
                <p>{widget.fields.make}</p>
                <p>{widget.fields.model}</p>
                <p>{widget.fields.year}</p>
              </div>
              <div className="widget-card-body">
                <Link className="btn-primary">Details</Link>
                <h3>${widget.fields.price}</h3>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SidebarCarsList;
