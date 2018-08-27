const chai = require('chai');
const chaiHttp = require('chai-http');
const geo = require('../route_handlers/geocoding.js');

const { expect } = chai;

chai.use(chaiHttp);

describe('GeoAPI', () => {
  it('responds to API key', (done) => {
    chai.request('https://maps.googleapis.com')
      .get('/maps/api/geocode/json?address=calgary&key=AIzaSyCykpqmbXtfdpUecLZlA--ftOLQJ-xOLgM')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
  it('formats geocode data to used portion', () => {
    const data = {
      results: [{
        formatted_address: 'calgary, AB',
        geometry: {
          location: { lat: 4, lng: 3 },
          location_type: 'ROOFTOP',
        },
        bad_data: 'BAD',
      }],
      status: 'OK',
    };
    const formatted = geo._formatGeocode(data);
    expect(formatted).to.deep.equal({
      formatted_address: 'calgary, AB',
      location: { lat: 4, lng: 3 },
      location_type: 'ROOFTOP',
      status: 'OK',
    });
  });
  it('location type filter accepts the right location type', () => {
    const geoObj = { location_type: 'TEST' };
    const type = 'TEST';
    const match = geo._validLocationType(geoObj, type);
    return expect(match).to.be.true;
  });
  it('location type filter rejects the wrong location type', () => {
    const geoObj = { location_type: 'WRONG' };
    const type = 'TEST';
    const match = geo._validLocationType(geoObj, type);
    return expect(match).to.be.false;
  });
  it('returns an array of locations with the correct location types', () => {
    const locationTypeMock = [
      { location_type: 'ROOFTOP' },
      { location_type: 'ROOFTOP' },
      { location_type: 'WRONG' },
      { location_type: 'ROOFTOP' },
      { location_type: 'WRONG' },
      { location_type: 'ROOFTOP' },
    ];
    const filtered = geo._filterLocationType(locationTypeMock, 'ROOFTOP');
    const BadElementIndex = filtered.findIndex(mock => mock.location_type === 'WRONG');
    expect(BadElementIndex).to.equal(-1);
  });
});
