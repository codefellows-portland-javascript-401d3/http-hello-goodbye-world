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
        expect(error).to.be.null;
        expect(response.text).to.have.equal('Hello world!');
        done();
      });
  });

  it('returns bye', done=>{
    request.get('/bye')
      .end((error, response)=>{
        expect(error).to.be.null;
        expect(response).to.have.status(200);
        done();
      });
  });

});
