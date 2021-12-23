import React, { useContext } from 'react';
import './forecast.scss';
import { Context } from '../../contex';

const Forecast = () => {
    const {hourlyForecast, state} = useContext(Context)
    const items = hourlyForecast.map((f, i) => {
        const image = {
          url: `http://openweathermap.org/img/wn/${f.weather[0].icon}@2x.png`,
          alt: `Image of  ${f.weather[0].description}`,
        };
        const description = f.weather[0].description;
        const unixTimestamp = f.dt;
        let hour = new Date(unixTimestamp * 1000).getHours();
        let ampm = 'am';
        if (hour === 0) hour = 12; 
        else if (hour > 12) {
          hour = hour - 12;
          ampm = 'pm';
        }
        return (
          <div key={i} className="forecast-item">
            <p className="forecast-item__time">{hour} {ampm}</p>
            <p className="forecast-item__temp">
                {Math.round(f.temp)} &deg;C
            </p>
            <img className="forecast-item__img" src={image.url} alt={image.alt} />
            <p className="forecast-item__description">{description}</p>
          </div>
        );
      });
  
      return (
        <div className="container">
        {state.city && 
              <div className="forecast">
                <h3 className="forecast__title">Hourly Forecast</h3>
                <div className="items">{items}</div>
            </div>
        } 
        </div>
      );
    }
  export default Forecast;
