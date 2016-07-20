const http = require('http');
const cowsay = require('cowsay');
const fs = require('fs');

const server = http.createServer((request, response)=>{

  if(request.url === '/'){

    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write(cowsay.say({text : 'Hello world!'}));
    response.end();

  } else if(request.url === '/bye'){

    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write(cowsay.say({text : 'Goodbye world!'}));
    response.end();

  } else if(request.url === '/random'){

    let random = Math.floor(Math.random()*5000);
    let message = `Here is a random number for you: ${random}`;

    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write(cowsay.say({text : message}));
    response.end();

  } else if(request.url === '/form'){

    response.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream('./templates/form.html').pipe(response);

  } else if(request.method === 'POST'){

    response.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream('./templates/thanks.html').pipe(response);

  } else {

    response.writeHead(404, {'Content-Type': 'text/plain'});
    response.write('Page not found!\n\n\n');
    response.write(`${request.url} is not a valid page.`);
    response.end();
  }

});

server.listen('8000', ()=>{
  console.log('server started on ', server.address().port);
});
