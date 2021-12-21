import React, { useState } from 'react';
import './App.scss';
import Header from './components/header/Header';
import Main from './components/Main/Main';
import Footer from './components/footer/Footer';
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
      error: undefined
    }
  );


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
          img: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
          temp: data.main.temp,
          feel: data.main.feels_like,
          descr: data.weather[0].description,
          humidity: data.main.humidity,
          pressure: data.main.pressure,
          visibility: data.visibility,
          hourlyForecast: forecastRes.hourly,
          dt: data.dt,
          error: undefined
    });
  }else {
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
            error: "Please enter a valid value"
      });
  }
}

const hourlyForecast = state.hourlyForecast;

  return (
    <Context.Provider value={{
      getWeather,
      state, 
      hourlyForecast
    }}>
        <div>
          <Header />
          <Main />
          <Footer />
        </div>
    </Context.Provider>

  );
}

export default App;
