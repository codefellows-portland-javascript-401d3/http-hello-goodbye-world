const chai = require('chai');
const chaiHttp = require('chai-http');
const url = require('url');
const http = require('http');
const assert = require('assert');

server = require('../server');

chai.use(chaiHttp);

const myServer = http.createServer(server.onRequest);

describe('HTTP server', () => {

  before((done) => {
    myServer.listen(8080);
    done();
  });

  // it('test URL response', (done) => {
  //   chai.request('http://localhost:8888')
  //   .get('/alpha')
  //   .end((err, res) => {
  //     // if (err) done(err);
  //     // assert.ok(res.status === 400);
  //     console.log(res);
  //     done();
  //   });
  // });

  it('fails, on bad requests', function(done) {
    chai.request('http://localhost:8080')
  .get('/')
  .end(function(err, res) {
    console.log(res);
    // assert.ok(res.status === 404);
    done();
  });
  }) ;

  it('test query param response', () => {

  });

  it('test HTTP verb response', () => {

  });

  it('test 400 response', () => {
    chai.request('http://localhost:8888')
    .get('/nonsense')
    .end((err,res) => {
      assert.ok(err);
    });
  });

  after((done) => {
    myServer.close();
    done();
  });
});
