# http-hello-goodbye-world

An http server that responds with either "hello world" or "goodbye world".

## To use
- Run `node index.js` from the command line
- Navigate to `localhost:8000` in your browser
- Available paths
  - / prints "Hello World"
  - /bye prints "Goodbye World"
  - /random prints a random number
  - /form takes you to a form
  - hitting the submit button on the /form page will take you to /thanks
  - ever other URL will print "Page not found!"
