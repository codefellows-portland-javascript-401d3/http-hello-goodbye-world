const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
const server = require('../server');

chai.use(chaiHttp);

describe('http-server', () => {
  // chai.request(server)
  it('returns homepage', done => {
    chai.request(server)
      .get('/')
      .end((err, res) => {
        if (err) return done(err);
        expect(res).to.have.status(200);
        expect(res).to.be.html;
        expect(res.text).to.have.string('Hello World');
        done();
      });
  });

  it('returns homepage with query', done=> {
    chai.request(server)
      .get('/?firstname=Aaron&lastname=Bini')
      .end((err, res) => {
        if (err) return done(err);
        //below line not working
        // expect(req).to.have.param('firstname');
        expect(res).to.have.status(200);
        expect(res).to.be.html;
        // expect(res).to.have.string('Hello Aaron');
        done();
      });
  });

  it('it returns goodbye', done => {
    // chai.request(server)
    done();
  });

  it('it returns goodbye with query', done => {
    // chai.request(server)
    done();
  });


  it('reads file', done => {
    chai.request(server)
      .get('/readfile')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.html;
        done();
      });
  });

  it('sends proxy request', done => {
    // chai.request(server)
    done();
  });
});
