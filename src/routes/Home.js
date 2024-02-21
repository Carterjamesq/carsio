import React from "react";
import Carousel from "../components/CarouselHomePage";

import { Helmet } from "react-helmet";
import CategorysHome from "../components/CategorysHome";

import CarImage from "../assets/header-main-image.jpg";

const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home - Cars io</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="header-home">
        <div className="header-head">
          <h1>Знайдіть авто в декілька кліків</h1>
          <p>
            Зареєструйте свій автомобіль безкоштовно. Встановіть власну ціну та
            легко продемонструйте свій автомобіль.
          </p>
          <div className="header-search">
            <form>
              <div className="form-group">
                <label>
                  Марка
                  <select name="make">
                    <option>Всі марки</option>
                  </select>
                </label>
                <label>
                  Модель
                  <select name="models">
                    <option>Всі моделі</option>
                  </select>
                </label>
              </div>
              <div className="form-group">
                <label>
                  Пробіг
                  <select name="km">
                    <option>Всі з пробігом</option>
                  </select>
                </label>
                <label>
                  Модель
                  <select name="make">
                    <option>Всі моделі</option>
                  </select>
                </label>
              </div>
            </form>
          </div>
        </div>
        <div className="car-header-img">
          <img src={CarImage} />
        </div>
      </div>
      <Carousel />
      <CategorysHome />
    </div>
  );
};

export default Home;
