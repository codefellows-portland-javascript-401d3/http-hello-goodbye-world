const http = require('http');
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet');

module.exports = http.createServer((req,res) => {
	const params = url.parse(req.url);
	const query = querystring.parse(params.query);

	res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
		res.statusCode = 200;
    res.write('Hello World!')
		res.end();
  } else

  if (req.url === '/exit') {
		res.statusCode = 200;
		res.write('Goodbye World!');
		res.end();
  } else

  if (req.url.startsWith('/bananas')) {
		res.statusCode = 200;
		if (query.num) res.write(query.num + ' Bananas!');
		res.end();
  } else

  if (req.url === '/question') {
		res.statusCode = 200;
		res.write('42');
		res.end();
  } else

	if (req.url === '/info') {
		res.statusCode = 200;
		res.write('You found the Info API page!\n');
		res.write('Hint: Try some get and post calls.\n');
		res.end();
		return
	} else

	if (req.url.startsWith('/info')) {
		res.statusCode = 200;	
		res.write(req.headers.host + '\n');
		res.write(req.url + '\n');
		res.write(req.method + '\n');
		res.write(JSON.stringify(params));
		res.write(JSON.stringify(query));
		res.end();
		return
	} else {
		// No paths found
		res.statusCode = 400;
		res.write('Bad request.');
		res.end();
		console.log('Bad request:' + req.url);
		console.log(JSON.stringify(params));
	}
});
