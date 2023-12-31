import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import dataslider from "../dataset/cars";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CarouselAboutPage = () => {
  return (
    <div>
      <h1>About</h1>
      <Carousel infinite={true} responsive={responsive} autoPlaySpeed={1000}>
        {dataslider.map((data) => (
          <div key={data.id}>
            <img src={data.image} alt={data.make} />
            <p>
              {data.make} - {data.model}
            </p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselAboutPage;
