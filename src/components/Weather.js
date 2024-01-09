import React, { useState, useEffect } from "react";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const apiKey = "d7ad1298602330b729c20e3bde2707d2";

  useEffect(() => {
    const fetchWeatherData = async () => {
      if (latitude && longitude) {
        try {
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
          );

          if (response.ok) {
            const data = await response.json();
            setWeatherData(data);
          } else {
            setError("Failed to fetch weather data");
          }
        } catch (error) {
          setError("Error fetching weather data");
        }
      }
    };

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      (error) => {
        setError("Error getting location");
      }
    );

    fetchWeatherData();
  }, [latitude, longitude]);

  return (
    <div>
      {error ? (
        <p>{error}</p>
      ) : (
        <div>
          {weatherData ? (
            <div>
              <h2>Weather Information</h2>
              <p>Location: {weatherData.name}</p>
              <p>Temperature: {weatherData.main.temp} Kelvin</p>
              <p>Weather: {weatherData.weather[0].description}</p>
            </div>
          ) : (
            <p>Loading weather data...</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Weather;
