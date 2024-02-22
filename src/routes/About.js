import CarouselAboutPage from "../components/CarouselAboutPage";

import { Helmet } from "react-helmet";

const About = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Про нас - Carsio</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <CarouselAboutPage />
    </div>
  );
};

export default About;
