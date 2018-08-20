const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index.js');

const { expect } = chai;

chai.use(chaiHttp);

describe('App', () => {
  describe('/api/example', () => {
    it('responds with status 200', (done) => {
      chai.request(app)
        .get('/api/example')
        .end((err, res) => {
          expect(res).to.have.status(200);
          done();
        });
    });
  });
});
