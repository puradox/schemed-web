import { withGoogleMap, GoogleMap } from "react-google-maps";
import React from 'react';

// Stateless component  

const Map =
  withGoogleMap(
    props => (
      <GoogleMap
        ref={props.onMapLoad} defaultZoom={props.zoom}
        defaultCenter={{ lat: props.lat, lng: props.lng }}
        onClick={props.onClick}>
      </GoogleMap>
    )
  );

export default Map;

