const fs = require('fs');
const parse = require('csv-parse');

module.exports = {
  allAddr: () => {
    return new Promise(async (resolve, reject) => {
      const csvData = [];
      fs.createReadStream(`${__dirname}/addresses.csv`)
        .pipe(parse())
        .on('data', (csvrow) => {
          const escapedRow = csvrow[0].replace(/“(.*)”/g, '$1');
          if (escapedRow)csvData.push(escapedRow);
        })
        .on('end', () => resolve(csvData));
    });
  },
};
