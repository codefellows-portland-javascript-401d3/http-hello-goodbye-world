const http = require('http');
const cowsay = require('cowsay');
const fs = require('fs');
const url = require('url');

module.exports = http.createServer((request, response)=>{

  const requestPath = url.parse(request.url, true).path;

  if(requestPath === '/'){

    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hello world!');
    response.end();

  } else if(requestPath === '/bye'){

    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write(cowsay.say({text : 'Goodbye world!'}));
    response.end();

  } else if(requestPath === '/random'){

    let random = Math.floor(Math.random()*5000);
    let message = `Here is a random number for you: ${random}`;

    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write(cowsay.say({text : message}));
    response.end();

  } else if(requestPath === '/form'){

    response.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream('./templates/form.html').pipe(response);

  } else if(request.method === 'POST'){

    request.pipe(fs.createWriteStream('post.txt'));
    fs.createReadStream('./templates/thanks.html').pipe(response);
    response.writeHead(302, {location: '/thanks'});

  } else if(requestPath === '/thanks'){

    response.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream('./templates/thanks.html').pipe(response);

  } else {

    response.writeHead(400, {'Content-Type': 'text/plain'});
    response.write('Page not found!\n\n\n');
    response.write(`${requestPath} is not a valid page.`);
    response.end();
  }

});
