import axios from "axios";
import {API_KEY} from './config';

const apiClient = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5',
  });


  const getWeatherBasedOnLocation = (city) => {
    return apiClient
      .get(
        `/weather?q=${city}&appid=${API_KEY}&units=metric`
      )
      .then((res) => res.data);
  };

  const getForecast = (lat, lon) => {
    return apiClient
      .get(
        `/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      )
      .then((res) => res.data);
  };
  
  export { getWeatherBasedOnLocation, getForecast };