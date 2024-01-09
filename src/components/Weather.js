import React, { useEffect, useState } from "react";
import axios from "axios";

import { TiWeatherCloudy } from "react-icons/ti";
import { RiCelsiusFill } from "react-icons/ri";

const Weather = () => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [weather, setWeather] = useState("");
  const [temperature, setTemperature] = useState(0);
  // const [cityName, setCityName] = useState("");

  useEffect(() => {
    const savePositionToState = (position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);

      // Fetch weather data here after setting latitude and longitude
      fetchWeather(position.coords.latitude, position.coords.longitude);
    };

    const fetchWeather = async (lat, lon) => {
      try {
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=60d505bb48f9c02e8d1f29a621cd125f&units=metric`
        );
        setTemperature(Math.round(res.data.main.temp));
        // setCityName(res.data.name);
        setWeather(res.data.weather[0].main);
      } catch (err) {
        console.error(err);
      }
    };

    window.navigator.geolocation.getCurrentPosition(savePositionToState);
  }, []);

  return (
    <div>
      <div className="weather">
        {/* <h2>{cityName}</h2> */}
        <div className="weahter-item">
          <p>{temperature}</p>
          <RiCelsiusFill />
        </div>
        <div className="weahter-item">
          <TiWeatherCloudy />
          <p>{weather}</p>
        </div>
      </div>
    </div>
  );
};

export default Weather;
