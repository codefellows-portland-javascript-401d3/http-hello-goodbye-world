const http = require('http');
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet');

module.exports = http.createServer((req,res) => {
	const params = url.parse(req.url);
	const query = querystring.parse(params.query);

	res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    render('Hello World!', data => {
			res.statusCode = 200;
			res.write(data);
			res.end();
			return
		});
  } else

  if (req.url === '/exit') {
    render('Goodbye World!', data => {
			res.statusCode = 200;
			res.write(data);
			res.end();
			return
		});
  } else

	if (req.url === '/api') {
		res.statusCode = 200;
		res.write('You found the API page!\n');
		res.write('Hint: Try some get and post calls.\n');
		res.end();
		return
	} else

	if (req.url.startsWith('/api')) {
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
		res.statusCode = 404;
		res.write('Path not found.');
		res.end();
	}
});

function render(str,callback) {
  figlet(str, (err, data) => {
    if (err) {
      console.log('Figlet broke on: ' + str);
      console.dir(err);
    	callback();
    } else {
      callback(data);
    }
  });
};
