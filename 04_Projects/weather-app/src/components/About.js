import React from 'react';
import { Link } from 'react-router-dom';
import lakeHillImage from '../image/lakeHill.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css';

const About = () => {
  return (
    <div className="bg-light p-5 mainContainer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <br /><h2 className="mb-4 about">About</h2>
            <br />
            <div className= "aboutDetail">
              <p>Welcome to the Weather App, your go-to source for weather information!</p>
              <p>This app allows you to check the current weather and forecast for various cities around the world. Simply enter the name of the city you're interested in, and the app will provide you with up-to-date weather data.</p>
              </div>
            <br /><br />

            <div className="keyFeatures">
              <h4>Key Features</h4>
              <br />
              <div className="keyFeaturesDetail">
                <ul>
                  <li>Get real-time weather information for a specific city.</li>
                  <li>View the temperature, weather conditions, and more.</li>
                  <li>See the forecast for the next few days.</li>
                  <li>Easy-to-use interface with a simple search form.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-6 imageText2">
            <img src={lakeHillImage} alt="Scenic Lake Hill" className="img-fluid rounded" />
            <p className="imageText">Welcome To The Weather App </p>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-12">
            <p className="text-center size">
              Whether you're planning a trip, curious about the weather, or just want to stay informed, the Weather App has you covered.
              Stay ahead of the weather with accurate and reliable data at your fingertips.
            </p>
          </div>
        </div>

        <div>
          <Link to="/weather">
            <button className="btn btn-outline-secondary">Check Weather</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
