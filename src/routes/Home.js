import React, { useEffect } from "react";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import { Helmet } from "react-helmet";
import CarImage from "../assets/header-main-image.jpg";

import { fetchContent } from "../dataset/carsDB";

const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Головна - Cars io</title>
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
      <div>
        <div>
          <h2>Популярні категорії</h2>
          <Tabs>
            <TabList>
              <Tab>Седан</Tab>
              <Tab>Позашляховик</Tab>
              <Tab>Електро</Tab>
            </TabList>

            <TabPanel>
              <h2>Content 1</h2>
            </TabPanel>
            <TabPanel>
              <h2>Content 2</h2>
            </TabPanel>
            <TabPanel>
              <h2>Content 3</h2>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Home;
