import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {auth} from "./components/actions/user";
import {Context} from './context';
import SignUp from "./components/authorization/SignUp";
import SignIn from "./components/authorization/SignIn";
import Header from './components/header/Header';
import Main from './components/Main/Main';
import Clouds from './components/Clouds/Clouds';
import * as Api from "./apis/weatherApi";

import './App.scss';



function App() {
  const isAuth = useSelector(state => state.user.isAuth)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(auth())
}, [])

  const[ favorites, setFavorites ] = useState([]);

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
    }
  );

  const saveToLocalStorage = (items) => {
		localStorage.setItem('favotites-city', JSON.stringify(items));
	};

  const addFavoriteCity = (state) => {
  const included = favorites.some(([city, country]) => {
    const [stateCity, stateCountry] = state;
    return (
      city.toLowerCase() === stateCity.toLowerCase() &&
      country.toLowerCase() === stateCountry.toLowerCase()
    );
  });

    if (!included) {
      setFavorites((favorites) => [...favorites, state]);
  }

}

const removeFavoriteCity = (state) => {
  const newFavotiteList = favorites.filter(
    (favorite) => favorite.city !== state.city
    );

  setFavorites(newFavotiteList);
  
  saveToLocalStorage(newFavotiteList);
}

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
            lat: undefined,
            lon: undefined,
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
    <BrowserRouter>
        <Context.Provider value={{
            getWeather,
            state, 
            hourlyForecast,
            dailyForecast,
            addFavoriteCity,
            removeFavoriteCity,
            favorites, 
          }}>
            <div>                            
                <Header/>
                {
                  !isAuth &&
                    <Routes>
                      <Route path="/registration" element={<SignUp/>}/>
                      <Route path="/login" element={<SignIn/>}/>
                  </Routes>
                }
                  {
                    state.city  ?  <Main /> 
                    :  
                    <Clouds/>
                  }
            </div>
        </Context.Provider>
    </BrowserRouter>

  );
}

export default App;