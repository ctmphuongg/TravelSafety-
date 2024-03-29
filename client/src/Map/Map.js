import React, { useState } from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import SearchBar from './SearchBar.js'
import "./Map.css"
const API_KEY = "AIzaSyDI4HgUw9Aw8eMrXx5jcAXvimyJLB4CS9g"


const center = {
  lat: 33.56,
  lng: -117.72
};

const onLoad = marker => {
  console.log('marker: ', marker)
}

function MapContainer() {
  const [selected, setSelected] = useState({
    lat: 41.8440047,
    lng: -71.4347475
  });
  return (
    <LoadScript
      googleMapsApiKey={API_KEY}
      libraries={["places"]}
    >
      <div className="map-container">
        <div className="search-bar-container">
          <SearchBar setSelected={setSelected} />
        </div>
        <div className="map">
          <GoogleMap
            mapContainerClassName="map-inner"
            center={center}
            zoom={10}
          >
            {selected && <Marker position={selected} onLoad={onLoad} />}
          </GoogleMap>
        </div>
      </div>
    </LoadScript>
  )
}

export default MapContainer;