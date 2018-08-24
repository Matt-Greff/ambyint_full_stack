const axios = require('axios');

module.exports = {
  _getGeocode(addr) { // used then style promises as it dramatically increased effeciency
    return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${addr}&key=AIzaSyCykpqmbXtfdpUecLZlA--ftOLQJ-xOLgM`)
      .then(({ data }) => {
        const { results, status } = data;
        if (data.status !== 'OK') return { status };
        const { formatted_address, geometry } = results[0];
        const { location, location_type } = geometry;
        const geoAddr = {
          formatted_address,
          location,
          location_type,
          status,
        };
        return geoAddr;
      });
  },
  _validLocationType(geo, locationType) {
    return geo.location_type === locationType;
  },
  async _getAndValidateGeo(addresses, options) {
    this._validLocationType = this._validLocationType.bind(this);
    this._getGeocode = this._getGeocode.bind(this);
    const { locationType } = options;
    const { _getGeocode, _validLocationType } = this;
    const geocodes = addresses.map(address => _getGeocode(address));
    const unfilteredGeos = await Promise.all(geocodes);
    return locationType
      ? unfilteredGeos.filter(geo => _validLocationType(geo, locationType))
      : unfilteredGeos;
  },
};
