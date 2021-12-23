import React from 'react';
import {  useMapEvents, TileLayer, LayersControl } from 'react-leaflet';

const Layers = () => {
            // Call useMapEvents:
        const map = useMapEvents({
            // Use leaflet map event as the key and a call back with the 
            // map method as the value:
            zoomend: () => {
            // Get the zoom level once zoom ended:
            console.log(map.getZoom())
            },
            moveend: () => {
            // Get bounds once move has ended:
            console.log(map.getBounds())
            }
        })
  return (
    <>
      <LayersControl position="topright">
        <LayersControl.BaseLayer checked name="Basic Map">
          <TileLayer
            attribution='&amp;copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </LayersControl.BaseLayer>
      </LayersControl>
    </>
  )
}

export default Layers;