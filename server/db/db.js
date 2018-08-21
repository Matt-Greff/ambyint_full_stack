const fs = require('fs');
const parse = require('csv-parse');

module.exports = {
  all(filter) {
    return new Promise((resolve, reject) => {
      const csvData = new Set();
      fs.createReadStream(`${__dirname}/addresses.csv`)
        .pipe(parse())
        .on('data', (csvrow) => {
          const escapedRow = csvrow[0].replace(/“(.*)”/g, '$1');
          // checks filter for match, if no filter is present it rejects empty strings
          if ((filter && filter(escapedRow)) || (!filter && escapedRow)) csvData.add(escapedRow);
        })
        .on('error', e => reject(e))
        .on('end', () => resolve([...csvData]));
    });
  },
  where(query) {
    return new Promise((res, rej) => {
      const regExp = new RegExp(`${query}`, 'gi');
      const filter = str => str.match(regExp);
      try {
        const addr = this.all(filter);
        return res(addr);
      } catch (e) {
        return rej(e);
      }
    });
  },
};
