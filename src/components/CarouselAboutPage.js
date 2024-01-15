import React, { useEffect, useState } from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { fetchContent } from "../dataset/carsDB";

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
      <h1>About</h1>
      <Carousel infinite={true} responsive={responsive} autoPlaySpeed={1000}>
        {content.map((data) => (
          <div key={data.sys.id}>
            <img
              src={data.fields.carImage.fields.file.url}
              alt={data.fields.make}
            />
            <p>
              {data.fields.make} - {data.fields.model}
            </p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselAboutPage;
