const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = require('chai').expect;
const fs = require('fs');
const server = require('../server');

chai.use(chaiHttp);

describe('http server', ()=>{

  const request = chai.request(server);

  it('returns homepage', done=>{
    request.get('/')
      .end((error, response)=>{
        if(error)return done(error);
        expect(response.text).to.equal('Hello world!');
        done();
      });
  });

  it('returns bye', done=>{
    request.get('/bye')
      .end((error, response)=>{
        if(error)return done(error);
        expect(response).to.have.status(200);
        done();
      });
  });

  it('returns random', done=>{
    request.get('/random')
      .end((error, response)=>{
        if(error)return done(error);
        expect(response.text).to.have.string('Here is a random number for you:');
        done();
      });
  });

  it('returns form', done=>{
    request.get('/form')
      .end((error, response)=>{
        if(error)return done(error);
        fs.readFile('./templates/form.html', 'utf-8', (error, data)=>{
          var localFile = data;
          expect(response.text).to.equal(localFile);
          done();
        });

      });
  });

  it('completes post request', done=>{
    request.post('/form')
    .end((error, response)=>{
      expect(response).to.have.status(200);
      done();
    });
  });

});
