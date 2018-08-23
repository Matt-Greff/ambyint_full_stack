const fs = require('fs');
const parse = require('csv-parse');
const axios = require('axios');

module.exports = {
  csvHandler({ query }) {
    const { csvFilter, queryFilter } = this;
    return new Promise((res, rej) => {
      const csvData = new Set();
      fs.createReadStream(`${__dirname}/addresses.csv`)
        .pipe(parse())
        .on('data', async (csvRow) => {
          // query and parse characters on read to stop redundant api calls
          const filteredRow = csvFilter(csvRow[0]);
          if (filteredRow && (!query || queryFilter(filteredRow, query))) csvData.add(filteredRow);
        })
        .on('error', e => rej(e))
        .on('end', () => res([...csvData]));
    });
  },
  queryFilter(addr, query) {
    const regExp = new RegExp(query, 'gi');
    return addr.match(regExp);
  },
  csvFilter(addr) {
    return addr.replace(/“(.*)”/g, '$1');
  },
  getGeocode(addr) {
    return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${addr}&key=AIzaSyCykpqmbXtfdpUecLZlA--ftOLQJ-xOLgM`)
      .then(({ data }) => {
        const { results, status } = data;
        if (data.status !== 'OK') return { status };
        const { formatted_address, geometry } = results[0];
        const { location, location_type } = geometry;
        const geocodedAddr = {
          formatted_address,
          location,
          location_type,
          status,
        };
        return geocodedAddr;
      }, err => new Error(err));
  },
  validAddrType(addr, type) {
    return addr.location_type === type;
  },
  getAndValidateGeocodes(addresses) {
    this.validAddrType = this.validAddrType.bind(this);
    this.getGeocode = this.getGeocode.bind(this);
    const {
      getGeocode,
      validAddrType,
    } = this;
    const geocodes = addresses.map(address => getGeocode(address));
    return Promise.all(geocodes)
      .then(results => results
        .filter(geocode => validAddrType(geocode, 'ROOFTOP')),
      err => new Error(err));
  },
};
