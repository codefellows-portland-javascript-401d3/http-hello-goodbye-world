This is a simple app that creates an http server and can route between multiple urls.

/ and /home are the urls that enable handlers to write a response of "Hello World!"
to the page.

/nextPage is the url that enables a handler to write a random Star Wars quote to the page.

/?name=luke tells the handler to show different response than the one for / and /home

/?format=jason tells the handler to show my treehouse (teamtreehouse.com) user profile in json format. 

/image get a .jpeg image of Luke Skywalker from the internet and downloads into a new file. Once complete the image is written to the page. 

/path is an option path that display RUN TO DAGOBAH

I used an npm module named starwars to genereate the random quote.

USAGE npm install starwars




