import React from 'react';
import './WeatherDisplay.css';

const WeatherDisplay = ({ weatherData }) => {
  if (!weatherData) return null;
  const { location, current } = weatherData;
  return (
    <div>
      <h2>Weather Information</h2>
      <p>
        Location: {location.name}, {location.region}, {location.country}
      </p>
      <p>Temperature: {current.temp_c}°C / {current.temp_f}°F</p>
      <p>Humidity: {current.humidity}%</p>
      <p>Wind Speed: {current.wind_kph} km/h</p>
      <p>Feels Like: {current.feelslike_c}°C / {current.feelslike_f}°F</p>
    </div>
  );
};

export default WeatherDisplay;
