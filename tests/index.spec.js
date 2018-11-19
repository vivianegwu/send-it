import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server/server';

const { expect } = chai;

chai.use(chaiHttp);
chai.should();

describe('SendIT', () => {
  describe('/', () => {
    it("should return response 'SendIT App'", (done) => {
      chai.request(app)
        .get('/')
        .end((err, response) => {
          response.should.have.status(200);
          expect(response.text).to.equal('SendIT App');
          done();
        });
    });
  });
});
