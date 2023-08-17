import React from 'react';
import { Routes, Route} from 'react-router-dom'; 
import Navbar from './components/Navbar';
import Home from './components/About';
import WeatherApp from './components/WeatherApp';
import Contact from './components/Contact';
import './App.css';

const App = () => {
  return (
    <div className="App">
        <Navbar />
          <Routes>
              <Route path="/"  element={<Home />} />
              <Route path="/weather" element={<WeatherApp />} />
              <Route path="/contact" element={<Contact />} />
          </Routes>  
    </div>
  );
};

export default App;
