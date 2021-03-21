import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '600px',
  height: '300px'
};

const location = {
  lat: 23.810331,
  lng: 90.412521
};

function Map() {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyDjqCwWrbJyt4Sg-LRqQpvEldtb3XFK5tc"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={location}
        zoom={10}
      >
          <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Map)