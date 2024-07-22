import React, { useState, useEffect } from "react";

const CurrencyComponent = () => {
  const [currencyData, setCurrencyData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json"
        );
        const data = await response.json();
        const filteredData = data.filter(
          (currency) =>
            currency.cc === "USD" ||
            currency.cc === "EUR" ||
            currency.cc === "GBP"
        );

        setCurrencyData(filteredData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="currency">
      <p>Курс валют </p>
      <span>|</span>
      <div className="currency-wrapper">
        {currencyData.map((currency) => (
          <div className="currency" key={currency.r030}>
            <p>{currency.cc}</p>
            <p>{parseFloat(currency.rate).toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurrencyComponent;
