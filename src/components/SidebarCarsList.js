import React, { useEffect, useState } from "react";

const SidebarCarsList = () => {
  const [widget, setWidget] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/cars.json")
      .then((res) => res.json())
      .then((widget) => setWidget(widget));
  }, []);

  return (
    <div className="carslist-widget">
      <div className="newest-cars">
        <h2>Newest cars</h2>
        {widget &&
          widget.slice(0, 2).map((widget) => (
            <div className="car-box" key={widget.id}>
              <img src={widget.image} alt={widget.make} />
              <div className="widget-card-header">
                <p>{widget.make}</p>
                <p>{widget.model}</p>
                <p>{widget.year}</p>
              </div>
              <div className="widget-card-body">
                <button className="btn-primary">Details</button>
                <h3>${widget.price}</h3>
              </div>
            </div>
          ))}
      </div>
      <div className="top-cars">
        <h2>Top cars</h2>
        {widget &&
          widget.slice(0, 3).map((widget) => (
            <div className="car-box" key={widget.id}>
              <img src={widget.image} alt={widget.make} />
              <div className="widget-card-header">
                <p>{widget.make}</p>
                <p>{widget.model}</p>
                <p>{widget.year}</p>
              </div>
              <div className="widget-card-body">
                <button className="btn-primary">Details</button>
                <h3>${widget.price}</h3>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SidebarCarsList;
