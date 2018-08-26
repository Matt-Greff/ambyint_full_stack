import propTypes from 'prop-types';
import React from 'react';
import GoogleMapReact from 'google-map-react';
import LocationPin from './LocationPin';

export default function Map({ addresses }) {
  const defaultCenter = { lat: 40.475365, lng: -100.397052 };
  function locationPins() { // eslint-disable-line
    if (addresses) {
      return addresses.map(address => (
        <LocationPin
          key={address.formatted_address}
          lat={address.location.lat}
          lng={address.location.lng}
          text="Kreyser Avrora"
        />));
    }
  }
  return (
    <div id="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCykpqmbXtfdpUecLZlA--ftOLQJ-xOLgM' }}
        defaultCenter={defaultCenter}
        defaultZoom={4}
      >
        {locationPins()}
      </GoogleMapReact>
    </div>
  );
}

Map.propTypes = {
  addresses: propTypes.arrayOf(propTypes.object),
};

Map.defaultProps = {
  addresses: null,
};
