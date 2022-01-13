import React, { useContext, useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import { Context } from '../../contex';
import './weather-graph.scss';
import { useTranslation } from 'react-i18next';



const WeatherGrapth = () => {
    const { t } = useTranslation()
    const {dailyForecast} = useContext(Context);

    const [category, setCategory] = useState([])
    const [data, setData] = useState([])

    useEffect(() => {
        const day = [];
        const temp =[];
        dailyForecast.forEach((d) => {
        const unixTimestamp = d.dt;
        const getTemp = Math.round(d.temp.day)
        let getDay = new Date(unixTimestamp * 1000).getDate();
            day.push(getDay)
            temp.push(getTemp)
        })
        setCategory(day)
        setData(temp)
      }, [dailyForecast]); 

    return(
        <div className="graph__container">
            
            <h3 className="graph__title">{t("weekly_foreacst")}</h3>
            <Chart options={{
                    chart: {
                        id: 'weather-graph'
                    },
                    xaxis: {
                        categories: category, 
                        title: {
                            text: 'Date',
                        },
                },
                yaxis: {
                    title: {
                        text: 'Temperature °C',
                    },
                },
                 }} 
                series={[{
                    name: 'temp',
                    data: data
                }]} type="line" height={'349px'} />
        </div>
    )
}

export default WeatherGrapth;