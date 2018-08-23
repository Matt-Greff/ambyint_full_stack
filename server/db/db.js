const fs = require('fs');
const parse = require('csv-parse');
const axios = require('axios');

module.exports = {
  all() {
    return new Promise((resolve, reject) => {
      const csvData = new Set();
      fs.createReadStream(`${__dirname}/addresses.csv`)
        .pipe(parse())
        .on('data', async (csvrow) => {
          csvData.add(csvrow[0]);
        })
        .on('error', e => reject(e))
        .on('end', () => resolve([...csvData]));
    });
  },
  queryFilter(addr, query) {
    const regExp = new RegExp(query, 'gi');
    return addr.formatted_address.match(regExp);
  },
  charFilter(addr) {
    return addr.replace(/“(.*)”/g, '$1');
  },
  async getGeocode(addr) {
    try {
      const { data } = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${addr}&key=AIzaSyCykpqmbXtfdpUecLZlA--ftOLQJ-xOLgM`);
      const { results } = data;
      const { formatted_address, geometry } = results[0];
      const { location, location_type } = geometry;
      const geocodedAddr = {
        formatted_address,
        location,
        location_type,
      };
      return geocodedAddr;
    } catch (e) {
      return console.log(e);
    }
  },
  validAddrType(addr, type) {
    return addr.location_type === type;
  },
  async addrFilter(arr, { query }) {
    const processedArr = [];
    this.charFilter = this.charFilter.bind(this);
    this.getGeocode = this.getGeocode.bind(this);
    this.validAddrType = this.validAddrType.bind(this);
    this.queryFilter = this.queryFilter.bind(this);
    const {
      charFilter,
      getGeocode,
      validAddrType,
      queryFilter,
    } = this;
    for (let i = 0; i < arr.length; i += 1) {
      let currAddr = arr[i];
      currAddr = charFilter(currAddr);
      currAddr = await getGeocode(currAddr);
      if (((query && queryFilter(currAddr, query)) || (currAddr && !query)) && validAddrType(currAddr, 'ROOFTOP')) {
        processedArr.push(currAddr);
      }
    }
    try {
      return processedArr;
    } catch (e) {
      return e;
    }
  },
};
