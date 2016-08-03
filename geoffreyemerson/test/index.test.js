const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const app = require('../lib/server');

chai.use(chaiHttp);

describe('api server', () => {

	const request = chai.request(app);

	it('returns 404 for bad path', done => {
		request
			.get('/badpath')
			.end((err, res) => {
				assert.ok(err);
				assert.equal(res.statusCode, 400);
				done();
			});
	});

	it('returns hello world on root route', done => {
		request
			.get('/')
			.end((err, res) => {
				if (err) return done(err);
				assert.equal(res.statusCode, 200);
				assert.equal(res.header['content-type'], 'text/plain');
				assert.equal(res.text, 'Hello World!');
				done();
			});
	});
});
