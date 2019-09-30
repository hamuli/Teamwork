import { describe } from 'mocha';
import chai from 'chai';
import chaihttp from 'chai-http';
import app from '../../index';
import stockData from './stockData.spec';


chai.use(chaihttp);
const { expect } = chai;

describe('sign up', ()=> {
  it('it should return email already taken ', (done)=> {
    chai.request(app)
      .post('/api/v1/auth/sign_up')
      .send(stockData.signup[0])
      .set(req.body.toke)
      .end((err, res)=> {
        expect(res.status).to.equal(409);
        done();
      });
  });
  it('it should sign up successfuly', (done)=> {
    chai.request(app)
      .post('/api/v1/auth/sign_up')
      .send(stockData.signup[0])
      .end((err, res)=> {
        expect(res.status).to.equal(201);
        done();
      });
  });
});
it('it should not create an account with invalid values', (done)=> {
  chai.request(app)
    .post('/api/v1/auth/sign_up')
    .send(stockData.signup[1])
    .end((err, res)=> {
      expect(res.status).to.equal(401);
      done();
    });
});
it('it should not create an account with an empty input', (done)=> {
  chai.request(app)
    .post('/api/v1/auth/connect')
    .send()
    .end((err, res)=> {
      expect(res.status).to.equal(400);
      done();
    });
});


