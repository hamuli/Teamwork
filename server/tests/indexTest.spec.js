import { describe } from 'mocha';
import chai from 'chai';
import chaihttp from 'chai-http';

import app from '../../index';

chai.use(chaihttp);
const { expect } = chai;

describe('server', ()=> {
  before((done)=> {
    // signup and get an access token
    chai.request(app)
      .post('/api/v1/auth/sign_up')
      .set('Accept', 'application/json')
      .set('Content-type', 'application/x-www-form-urlencoded')
      .send(stockData.signup[0])
      .then((res)=> {
        token = res.body.data.token;
        done();
      });
  });
  it('YAY!  Welcom to Teamwork !! Here to serve you fill free', (done)=> {
    chai.request(app)
      .get('/')
      .set('content-type', 'application/json')
      .end((err, res)=> {
        expect(res.status).to.equal(200);
        done();
      });
  });
});

