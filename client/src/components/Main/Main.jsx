import React from 'react';
import CardWeather from '../cardWeather/CardWeather';
import WeatherMap from '../cardWeatherMap/WeatherMap';
import Forecast from '../forecast/Forecast';
import WeatherGraph from '../weatherGraph/WeatherGraph';
import './main.scss';


const Main = () => {  
  
    return (
        <> 
                <div className="main-container">
                    <CardWeather />              
                    <Forecast/>
                    <WeatherGraph/>
                    <WeatherMap/>
                </div>
        <div className="pr">weather app</div>
        </>
    )
}

export default Main;
