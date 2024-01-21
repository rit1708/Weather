import React, { useState, useEffect } from 'react';
import Api from './Utils/Api';
import LocationForm from './Comp/locationForm';
import WeatherDisplay from './Comp/WeatherDisplay';
import './App.css';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);

  const handleGetWeather = async (latitude, longitude) => {
    try {
      const data = await Api.getWeather(latitude, longitude);
      setWeatherData(data);
    } catch (error) {
      console.error('Error getting weather data', error);
    }
  };

  const handleGetLocation = (latitude, longitude) => {
    console.log("🚀 ~ handleGetLocation ~ longitude:", longitude);
    console.log("🚀 ~ handleGetLocation ~ latitude:", latitude);
  };

  useEffect(() => {
    const savedLatitude = localStorage.getItem('lastLatitude') || '';
    const savedLongitude = localStorage.getItem('lastLongitude') || '';
    handleGetWeather(savedLatitude, savedLongitude);
  }, []);

  return (
    <div className="app-container">
      <div className="content-container">
        <LocationForm onGetWeather={handleGetWeather} onGetLocation={handleGetLocation} />
        <WeatherDisplay weatherData={weatherData} />
      </div>
    </div>
  );
};

export default App;
