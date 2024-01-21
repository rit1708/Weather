import React from 'react';
import { useFormik } from 'formik';
import Api from '../Utils/Api';
import './LocationForm.css';

const LocationForm = ({ onGetWeather, onGetLocation }) => {
  const formik = useFormik({
    initialValues: {
      latitude: '',
      longitude: '',
    },
    onSubmit: values => {
      onGetWeather(values.latitude, values.longitude);
    },
  });

  const handleGetCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        formik.setValues({ latitude: String(latitude), longitude: String(longitude) });
        onGetLocation(latitude, longitude);
      },
      error => console.error(error)
    );
  };

  const handleGetWeather = async () => {
    const { latitude, longitude } = formik.values;
    localStorage.setItem('lastLatitude', latitude);
    localStorage.setItem('lastLongitude', longitude);
    const weatherData = await Api.getWeather(latitude, longitude);
    onGetWeather(weatherData);
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <label>
        Latitude:
        <input
          type="text"
          name="latitude"
          onChange={formik.handleChange}
          value={formik.values.latitude}
        />
      </label>
      <label>
        Longitude:
        <input
          type="text"
          name="longitude"
          onChange={formik.handleChange}
          value={formik.values.longitude}
        />
      </label>
      <button type="button" onClick={handleGetCurrentLocation}>
        Get Current Location
      </button>
      <button type="submit" onClick={handleGetWeather}>
        Get Weather
      </button>
    </form>
  );
};

export default LocationForm;
