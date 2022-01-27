import React, { useContext } from 'react';
import './card-weather.scss';
import { Context } from '../../context';
import moment from 'moment';

const CardWeather = () => {
    const {state} = useContext(Context)
    return (
        <div className="container">
            {
                state.city ?
                <div className="weather-container">
                <h3 className="day">{moment().format("MMM Do YYYY, h:mm a")} </h3>
                <p className="city">{state.city}, {state.country}</p>
                <div className="temp-container">
                    <img src={state.img} alt="weather img"/>
                    <p className="temp">{Math.round(state.temp)} &deg;C</p>
                </div>
                <p className="feel">Feels like {Math.round(state.feel)}&deg;C {state.descr}</p>
                <div className="other-data">
                    <p>Humidity: {state.humidity}%</p>
                    <p>{state.pressure}hPa</p>
                    <p>{state.visibility/1000}km</p>
                </div>

            </div> 
            :
            <p>{state.error}</p>
            }


        </div>
    )
}

export default CardWeather;