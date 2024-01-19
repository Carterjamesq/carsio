import React from "react";
import Carousel from "../components/CarouselHomePage";

import { Helmet } from "react-helmet";
import CategorysHome from "../components/CategorysHome";

const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home - Cars io</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <h1>Home page</h1>
      <h2>Hello world</h2>
      <Carousel />
      <CategorysHome />
    </div>
  );
};

export default Home;
