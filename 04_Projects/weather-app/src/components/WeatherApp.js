import React, { useState, useEffect } from 'react';
import './WeatherApp.css';
import axios from 'axios';
import weatherAppBg from '../image/weatherAppBg.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


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

      <div className="content-wrapper">
        <p><h2>The Only Weather Forecast You Need</h2></p>
          <form className="weather-search-form" onSubmit={handleSearch}>
            <input type="text" name="city" placeholder="Enter city name" />
            <button type="submit"><FontAwesomeIcon icon={faSearch} /></button>   
          
        </form>
      </div>

     
      {weatherData && (
        
        <div className="weather-info">
           <div>
              <p>Currently in </p> 
              <p className = "currentLocation">{weatherData.name}</p>
            </div>
          <p>{new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })}</p>
          <p>{Math.round((weatherData.main.temp - 273.15) * 9/5 + 32)}°F</p>
          <p>RealFeel: {Math.round((weatherData.main.feels_like - 273.15) * 9/5 + 32)}°F</p>
          <p>{weatherData.weather[0].description} <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`} alt={weatherData.weather[0].icon}/> </p>
        </div>
      )}
      {forecastData.length > 0 && (
        <div className="weather-forecast">
        <h3>Forecast for the Next Few Days</h3>
        <ul className="forecast-list">
          {forecastData
          .filter((forecast, index) => index % 8 === 0)
          .slice(0, 4)
          .map((forecast, index) => (
            <li key={index} className="forecast-item">
              <div className="forecast-details">
                <p>{new Date(forecast.dt_txt).toLocaleDateString('en-US', { weekday: 'long' })}</p> 
                <p>{Math.round((forecast.main.temp - 273.15) * 9/5 + 32)}°F</p> {/* Temperature */}
                <div className="forecast-image">
                <img src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`} alt={forecast.weather[0].icon}  />
                </div>
                <p> {forecast.weather[0].description}</p> {/* Weather */}
              </div>
              
            </li>
          ))}
        </ul>
      </div>
      )}
    </div>
  );
};

export default WeatherApp;