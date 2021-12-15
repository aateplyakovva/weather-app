import React, { useState } from 'react';
import './App.scss';
import Header from './components/header/Header';
import Main from './components/Main/Main';
import Footer from './components/footer/Footer';
import {Context} from './contex';
import {API_KEY, API_BASE_URL} from '../src/apis/config';

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
      error: undefined
    }
  );

const getWeather = async (e) => {
  e.preventDefault();
  const city = e.target.elements.city.value;


  if(city){
    
  const apiUrl = await fetch(`${API_BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`);
  const data = await apiUrl.json();

    setState( 
      {
          city: data.name,
          country: data.sys.country,
          img: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
          temp: data.main.temp,
          feel: data.main.feels_like,
          descr: data.weather[0].description,
          humidity: data.main.humidity,
          pressure: data.main.pressure,
          visibility: data.visibility,
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
            error: "Please enter a valid value"
      });
  }
}
  return (
    <Context.Provider value={{
      getWeather,
      state
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
