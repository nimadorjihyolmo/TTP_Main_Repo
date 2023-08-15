import React, { useState, useEffect } from 'react';
import './WeatherApp.css';
import axios from 'axios';

const WeatherApp = () => {
  const apiKey = '3ce209e69344c025839d816a93578603';
  const [cityName, setCityName] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);

  useEffect(() => {
    if (cityName) {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`)
        .then(response => setWeatherData(response.data))
        .catch(error => {
          console.error('Error fetching data:', error);
          setWeatherData(null);
        });
      
      axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`)
        .then(response => setForecastData(response.data.list))
        .catch(error => {
          console.error('Error fetching forecast data:', error);
          setForecastData([]);
        });
    }
  }, [cityName]);

  const handleSearch = (e) => {
    e.preventDefault();
    setCityName(e.target.city.value);
  };

  return (
    <div className="weather-app-container">
      <h2>Weather App</h2>
      <form className="weather-search-form" onSubmit={handleSearch}>
        <input type="text" name="city" placeholder="Enter city name" />
        <button type="submit">Search</button>
      </form>
      {weatherData && (
        <div className="weather-info">
          <p>City: {weatherData.name}</p>
          <p>Temperature: {Math.round(weatherData.main.temp - 273.15)}°C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
        </div>
      )}
      {forecastData.length > 0 && (
        <div className="weather-forecast">
          <h3>Forecast for the Next Few Days</h3>
          <ul>
            {forecastData.slice(0, 4).map((forecast, index) => (
              <li key={index}>
                Date: {forecast.dt_txt}, Temperature: {Math.round(forecast.main.temp - 273.15)}°C, Weather: {forecast.weather[0].description}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
