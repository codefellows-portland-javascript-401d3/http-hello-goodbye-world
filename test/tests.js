const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = require('assert');

const server = require('../server');

chai.use(chaiHttp);

const request = chai.request(server);
describe('HTTP server', () => {

  it('fails on bad requests', function(done) {
    request
  .get('/nonsense')
  .end(function(err, res) {
    assert.ok(err);
    assert.equal(res.statusCode, 400);
    done();
  });
  });

  it('test query param response', () => {
    request
    .get('/count?num=5')
    .end((err, res) => {
      if (err) return done(err);
      assert.equal(res.statusCode, 200);
      assert.equal(res.header['content-type'], 'text/plain');
      assert.equal(res.text, '5 is the queried number.');
      done();
    });
  });

  it('test HTTP verb response: POST', () => {
    request
    .get('/postest')
    .end((err, res) => {
      if (err) return done(err);
      assert.equal(res.statusCode, 200);
      assert.equal(res.method, 'POST');
      assert.equal(res.header['content-type'], 'text/plain');
      assert.equal(res.text, 'Path "/postest" Loaded! Mode: POST');
      done();
    });
  });

  it('test "/" route', done => {
    request
    .get('/')
    .end((err, res) => {
      if (err) return done(err);
      assert.equal(res.statusCode, 200);
      assert.equal(res.header['content-type'], 'text/plain');
      assert.equal(res.text, 'Path "/" Loaded!');
      done();
    });
  });
});
