import axios from 'axios';

const API_KEY = '572a1bef09394713a7281044242101';

const Api = {
  getWeather: async (latitude, longitude) => {
    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${latitude},${longitude}`
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching weather data', error);
      throw error;
    }
  },
};

export default Api;
