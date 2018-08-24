const fs = require('fs');
const parse = require('csv-parse');

module.exports = {
  _csvHandler(fileToParse) {
    const { _csvFilter } = this;
    return new Promise((res, rej) => {
      const csvData = new Set();
      fs.createReadStream(`${__dirname}/${fileToParse}`)
        .on('error', e => rej(e))
        .pipe(parse())
        .on('data', (csvRow) => {
          // parse characters on read and removes dublipates by using a Set
          const filteredRow = _csvFilter(csvRow[0]);
          if (filteredRow) csvData.add(filteredRow);
        })
        .on('end', () => res([...csvData]));
    });
  },
  _csvFilter(addr) {
    return addr.replace(/“(.*)”/g, '$1');
  },
};
