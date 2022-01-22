import React, { useEffect }  from 'react';
import './weather-map.scss';
import {API_KEY} from './../../apis/config';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-openweathermap/leaflet-openweathermap.css';
import 'leaflet-openweathermap';
import { useTranslation } from 'react-i18next';

const WeatherMap = () => {
        const { t } = useTranslation();

    useEffect(() => {
        const osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 18, attribution: 'copyright <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' });
        
        const clouds = L.OWM.clouds({showLegend: false, opacity: 0.5, appId: `${API_KEY}`});
        const cloudscls = L.OWM.cloudsClassic({showLegend: false,appId: `${API_KEY}`});
        const precipitation = L.OWM.precipitation({showLegend: false, appId: `${API_KEY}`});
        const precipitationcls = L.OWM.precipitationClassic({showLegend: false,appId: `${API_KEY}`});
        const rain = L.OWM.rain({showLegend: false,appId: `${API_KEY}`});
        const raincls = L.OWM.rainClassic({showLegend: false,appId: `${API_KEY}`});
        const snow = L.OWM.snow({showLegend: false,appId: `${API_KEY}`});
        const pressure = L.OWM.pressure({showLegend: false,appId: `${API_KEY}`});
        const pressurecntr = L.OWM.pressureContour({showLegend: false,appId: `${API_KEY}`});
        const temp = L.OWM.temperature({showLegend: false,appId: `${API_KEY}`});
        const wind = L.OWM.wind({showLegend: false,appId: `${API_KEY}`});
        const map = L.map('map', { center: new L.LatLng(53.9,  27.5667), zoom: 5, layers: [osm] });
        const baseMaps = { "OSM Standard": osm };
        const overlayMaps = {
            [t("clouds")]: clouds,
            [t('cloudscls')]: cloudscls,
            [t('precipitation')]: precipitation,
            [t('precipitationcls')]: precipitationcls,
            [t('rain')]: rain,
            [t('raincls')]: raincls,
            [t('snow')]: snow,
            [t('pressure')]: pressure,
            [t('pressurecntr')]: pressurecntr,
            [t('temp')]: temp,
            [t('wind')]: wind,
        };
        const layerControl = L.control.layers(baseMaps, overlayMaps,{collapsed:window.innerWidth < 768}).addTo(map);
    }, []);
    
    return(

                <div className="weathermap-container"> 
                <div id="map" style={{height: '260pt', borderRadius:'20px'}} className="map-weather"></div>
               </div> 

    )
}
export default WeatherMap;