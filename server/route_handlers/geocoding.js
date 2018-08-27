const axios = require('axios');

module.exports = {
  _getGeocode(addr) { // used then style promises as it dramatically increased effeciency
    return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${addr}&key=AIzaSyCykpqmbXtfdpUecLZlA--ftOLQJ-xOLgM`)
      .then(({ data }) => {
        const { status } = data;
        if (status !== 'OK') return { status };
        return this._formatGeocode(data);
      });
  },
  _formatGeocode(data) {
    const { results, status } = data;
    const { formatted_address, geometry } = results[0];
    const { location, location_type } = geometry;
    return {
      formatted_address,
      location,
      location_type,
      status,
    };
  },
  _validLocationType(geo, locationType) {
    return geo.location_type === locationType;
  },
  _filterLocationType(geocodes, locationType) {
    return locationType
      ? geocodes.filter(geo => this._validLocationType(geo, locationType))
      : geocodes;
  },
  async _getAndValidateGeo(addresses, options) {
    this._filterLocationType = this._filterLocationType.bind(this);
    this._getGeocode = this._getGeocode.bind(this);
    const { _getGeocode, _filterLocationType } = this;
    const geocodes = addresses.map(addr => _getGeocode(addr));
    const unfilteredGeos = await Promise.all(geocodes);
    const { locationType } = options;
    return _filterLocationType(unfilteredGeos, locationType);
  },
};
