import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = () => <div>text</div>;

export default function () {
  return (
    <div
      id="map"
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo' }}
        defaultCenter={{ lat: 59.95, lng: 30.33 }}
        defaultZoom={11}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="Kreyser Avrora"
        />
      </GoogleMapReact>
    </div>
  );
}
