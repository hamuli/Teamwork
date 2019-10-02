import { describe } from 'mocha';
import chai from 'chai';
import chaihttp from 'chai-http';
import app from '../../index';
import stockData from './stockData.spec';


chai.use(chaihttp);
const { expect } = chai;


let token;

describe('sign up', ()=> {
  before((done)=> {
    // signup and get an access token
    chai.request(app)
      .post('/api/v1/auth/sign_up')
      .set('content-type', 'application/json')
      .set('Content-type', 'application/x-www-form-urlencoded')
      .send(stockData.signup[0])
      .then((res)=> {
        token = res.body.data.token;
        done();
      });
  });
  it('it should sign up', (done)=> {
    chai.request(app)
      .post('/api/v1/auth/sign_up')
      .send(stockData.signup[2])
      .end((err, res)=> {
        expect(res.status).to.equal(201);
        done();
      });
  });
  it('it should return email already taken ', (done)=> {
    chai.request(app)
      .post('/api/v1/auth/sign_up')
      .send(stockData.signup[0])
      .end((err, res)=> {
        expect(res.status).to.equal(409);
        done();
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

  describe('Sign In', ()=> {
    it('it should sign in user  with a valid token ', (done)=> {
      chai.request(app)
        .post('/api/v1/auth/connect')
        .set('content-type', 'application/json')
        .set('Content-type', 'application/x-www-form-urlencoded')
        .send(stockData.signin[0])
        .end((err, res)=> {
          if (err) done(err);
          expect(res.status).to.equal(201);
          done();
        });
    });
    it('it should not sign in with an empty input', (done)=> {
      chai.request(app)
        .post('/api/v1/auth/connect')
        .set('Content-type', 'application/x-www-form-urlencoded')
        .send()
        .end((err, res)=> {
          if (err) done(err);
          expect(res.status).to.equal(400);
          done();
        });
    });
    it('it should sign in with an invalid password', (done)=> {
      chai.request(app)
        .post('/api/v1/auth/connect')
        .set('Content-type', 'application/x-www-form-urlencoded')
        .send(stockData.signin[1])
        .end((err, res)=> {
          if (err) done(err);
          expect(res.status).to.equal(400);
          done();
        });
    });
    it('it should not sign in with an invalid eamil', (done)=> {
      chai.request(app)
        .post('/api/v1/auth/connect')
        .set('Content-type', 'application/x-www-form-urlencoded')
        .send(stockData.signin[2])
        .end((err, res)=> {
          if (err) done(err);
          expect(res.status).to.equal(401);
          done();
        });
    });
    it('it should not sign in with a password that no much 6 element and have at least one number ', (done)=> {
      chai.request(app)
        .post('/api/v1/auth/connect')
        .set('Content-type', 'application/x-www-form-urlencoded')
        .send()
        .end((err, res)=> {
          if (err) done(err);
          expect(res.status).to.equal(400);
          done();
        });
    });
    it('it should not sign in with a email that no have @ . in it', (done)=> {
      chai.request(app)
        .post('/api/v1/auth/connect')
        .set('Content-type', 'application/x-www-form-urlencoded')
        .send(stockData.signin[3])
        .end((err, res)=> {
          if (err) done(err);
          expect(res.status).to.equal(400);
          done();
        });
    });
    it('it should not create an account with an empty input', (done)=> {
      chai.request(app)
        .post('/api/v1/auth/connect')
        .set('Content-type', 'application/x-www-form-urlencoded')
        .send(stockData.signin[4])
        .end((err, res)=> {
          if (err) done(err);
          expect(res.status).to.equal(400);
          done();
        });
    });

    describe('Creation of a Article post', ()=> {
      it('Should return an error with a 401 status when the user is not authenticated', (done)=> {
        chai.request(app)
          .post('/api/v1/articles')
          .set('content-type', 'application/json')
          .end((err, res)=> {
            if (err) done(err);
            expect(res.status).to.equal(401);
            done();
          });
      });
      it('Should return an error  a 401 status when the Article doasn\'t match article input', (done)=> {
        chai.request(app)
          .post('/api/v1/articles')
          .set('content-type', 'application/json')
          .end((err, res)=> {
            if (err) done(err);
            expect(res.status).to.equal(401);
            done();
          });
      });
      it('Should return an error  a 401 status when the  doasn\'t match article input', (done)=> {
        chai.request(app)
          .post('/api/v1/articles')
          .set('content-type', 'application/json')
          .end((err, res)=> {
            if (err) done(err);
            expect(res.status).to.equal(401);
            done();
          });
      });
      it('Should return an access denied error 401 when the user create an article without a given token  ', (done)=> {
        chai.request(app)
          .post('/api/v1/articles')
          .set('content-type', 'application/json')
          .end((err, res)=> {
            if (err) done(err);
            expect(res.status).to.equal(401);
            done();
          });
      });
    });
  });
});
