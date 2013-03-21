var http = require('http');

var app = http.createServer(http.logger());

app.get('/', function(request, response) {
  response.send('Hello World, this is Opensourcery!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
