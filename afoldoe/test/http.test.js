const chai = require(`chai`);
const chaiHttp = require(`chai-http`);
const assert = chai.assert;
const server = require(`../lib/server`);
const url = require('url');

chai.use(chaiHttp);

describe(`checking server`, () => {
  const request = chai.request(server);
  
  it('gets home route', done => {
    request
      .get('/')
      .end((err, res) => {
        assert.equal(res.statusCode, 200);
        done();
      });
  });
    
  it(`gets nextPage route`, done => {
    request
      .get('/nextPage')
      .end((err, res) => {
        assert.equal(res.statusCode, 200);
        done();
      });
  });

  it(`tests query string`, done => {
    request
      .get(`/nextPage`)
      .query({name: 'luke'})
      .end((err, res) => {
        assert.equal(res.statusCode, 200);
        done();
      });
  });

  it(`tests returns 404`, done => {
    request
      .get(`/blah`)
      .end((err, res) => {
        assert.equal(res.statusCode, 404);
        done();
      });
  });

});