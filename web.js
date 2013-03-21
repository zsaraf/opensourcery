// var http = require('http');

// var app = http.createServer(http.logger());

// app.get('/', function(request, response) {
//   response.send('Hello World, this is Opensourcery!');
// });

// var port = process.env.PORT || 5000;
// app.listen(port, function() {
//   console.log("Listening on " + port);
// });

var http = require('http'),
    fs = require('fs');

fs.readFile('./index.html', function (err, html) {
    if (err) {
        throw err; 
    }       
    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(8000);
});
