import React from 'react';
import CardWeather from '../cardWeather/CardWeather';
import WeatherMap from '../cardWeatherMap/WeatherMap';
import WeatherGrapth from '../weatherGrapth/WeatherGrapth';
import './main.scss';

const Main = () => {
    return (
        <div className="main-container">
          <CardWeather/>
          <WeatherMap/>
          <div className="forecast"></div>
          <WeatherGrapth/>
        </div>
    )
}

export default Main;
