import { describe } from 'mocha';
import chai from 'chai';
import chaihttp from 'chai-http';
import app from '../../index';
// import stockData from './stockData.spec';


chai.use(chaihttp);
const { expect } = chai;

describe('sign up', ()=> {
  it('it should not create an account with a valid values', (done)=> {
    chai.request(app)
      .post('/api/v1/auth/sign_up')
      .send('')
      .end((err, res)=> {
        expect(res.status).to.equal(400);
        expect(res.status).to.equal(400);
        done();
      });
  });
});
describe('Login', ()=> {
  it('it should not create an account with undefinned values', (done)=> {
    chai.request(app)
      .post('/api/v1/auth/connect')
      .send('')
      .end((err, res)=> {
        expect(res.status).to.equal(400);
        done();
      });
  });
});
