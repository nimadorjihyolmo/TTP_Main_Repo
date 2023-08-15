import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
  return (
    <div className="bg-light p-5">
      <div className="container">
        <h2 className="mb-4">About Weather App</h2>
        <p>Welcome to the Weather App, your go-to source for weather information!</p>
        <p>This app allows you to check the current weather and forecast for various cities around the world. Simply enter the name of the city you're interested in, and the app will provide you with up-to-date weather data.</p>
        <div className="mt-4">
          <h4>Key Features:</h4>
          <ul>
            <li>Get real-time weather information for a specific city.</li>
            <li>View the temperature, weather conditions, and more.</li>
            <li>See the forecast for the next few days.</li>
            <li>Easy-to-use interface with a simple search form.</li>
          </ul>
        </div>
        <p className="mt-4">Whether you're planning a trip, curious about the weather, or just want to stay informed, the Weather App has you covered. Stay ahead of the weather with accurate and reliable data at your fingertips.</p>
      </div>
    </div>
  );
};

export default About;
