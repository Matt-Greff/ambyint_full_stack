const chai = require('chai');
const db = require('../db/db.js');

const { expect } = chai;

describe('DB', () => {
  describe('Csv reading', () => {
    it('reads without error', (done) => {
      db._csvHandler('addresses.csv').then((res) => {
        expect(res).to.be.an('array');
        done();
      }).catch((e) => {
        expect(e).to.not.be.an('error');
        done();
      });
    });
    it('displays error on improper file name', (done) => {
      db._csvHandler('wrong-name.csv').then((res) => {
        expect(res).to.not.be.an('array');
        done();
      }).catch((e) => {
        expect(e).to.be.an('error');
        done();
      });
    });
    it('filters unwanted characters from csv', () => {
      const str = '“test”';
      const filtered = db._csvFilter(str);
      expect(filtered).to.equal('test');
    });
  });
});
