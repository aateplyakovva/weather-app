import React from 'react';
import CardWeather from '../cardWeather/CardWeather';
import WeatherMap from '../cardWeatherMap/WeatherMap';
import Forecast from '../forecast/Forecast';
import WeatherGrapth from '../weatherGrapth/WeatherGrapth';
import './main.scss';

const Main = () => {
    return (
        <div className="main-container">
          <CardWeather />
          <Forecast/>
          <WeatherGrapth/>
          <WeatherMap/>

        </div>
    )
}

export default Main;
