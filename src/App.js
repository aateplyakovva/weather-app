import React, { useState } from 'react';
import './App.scss';
import Header from './components/header/Header';
import Main from './components/Main/Main';
import {Context} from './contex';

import * as Api from "./apis/weatherApi";


function App() {

  const [ state, setState ] = useState(
    {
      city: undefined,
      country: undefined,
      img: undefined,
      temp: undefined,
      feel: undefined,
      descr: undefined,
      humidity: undefined,
      pressure: undefined,
      visibility: undefined,
      hourlyForecast: [],
      dailyForecast: [],
      error: undefined,
      coords: {
        latitude: 45,
        longitude: 60
      }
    }
  );

  // const getCurrentLocation = () => {
  //   if (!navigator.geolocation){
	// 		console.log('error', 'ERROR: Geolocation is not supported by this browser');
	// 		return;
	// 	}

  // }


  //  React.useEffect(() => {

  //   if (navigator.geolocation){
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       console.log('debug', position)
  //       let newCoords = {
  //         latitude: position.coords.latitude,
  //         longitude: position.coords.longitude
  //       }
  //       setState({
  //         coords: newCoords
  //       });

  //       Api.getForecast(state.coords.latitude, state.coords.longitude)
        
  //     })
  //   } else {
  //     console.log('not supported')
  //   }
  //  }, [])


const getWeather = async (e) => {
  e.preventDefault();
  const city = e.target.elements.city.value;


  if(city){
    
    const data = await Api.getWeatherBasedOnLocation(city);
    const forecastRes = await Api.getForecast(
      data.coord.lat,
      data.coord.lon
      );
    setState( 
      {
          city: data.name,
          country: data.sys.country,
          lat: data.coord.lat,
          lon: data.coord.lon,
          img: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
          temp: data.main.temp,
          feel: data.main.feels_like,
          descr: data.weather[0].description,
          humidity: data.main.humidity,
          pressure: data.main.pressure,
          visibility: data.visibility,
          hourlyForecast: forecastRes.hourly,
          dailyForecast: forecastRes.daily,
          dt: data.dt,
          error: undefined
    });
  } else {
      setState( 
        {
            city: undefined,
            country: undefined,
            img: undefined,
            temp: undefined,
            feel: undefined,
            descr: undefined,
            humidity: undefined,
            pressure: undefined,
            visibility: undefined,
            dt: undefined,
            hourlyForecast: [],
            dailyForecast: [],
            error: "Please enter a valid value"
      });
  }
}

const hourlyForecast = state.hourlyForecast;
const dailyForecast = state.dailyForecast;

  return (
    <Context.Provider value={{
      getWeather,
      state, 
      hourlyForecast,
      dailyForecast, 
    }}>
          <div>
              <Header/>
              <Main />
          </div>
    </Context.Provider>

  );
}

export default App;
