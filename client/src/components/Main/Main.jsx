import React from 'react';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

import CardWeather from '../cardWeather/CardWeather';
import Forecast from '../forecast/Forecast';
import WeatherGraph from '../weatherGraph/WeatherGraph';
import WeatherMap from '../cardWeatherMap/WeatherMap';

import './main.scss';

const Main = () => {
  const loading = useSelector((state) => state.app.loading);
  return (
    <>
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop:'4rem'}}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          <div className="main-container">
            <CardWeather />
            <Forecast />
            <WeatherGraph />
            <WeatherMap />
          </div>
          <div className="pr">weather app</div>
        </>
      )}
    </>
  );
};

export default Main;
