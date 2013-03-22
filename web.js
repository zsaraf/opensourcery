// var http = require('http')
var fs   = require('fs');
var path = require('path');
var express = require('express');

var github = require('./github.js');

var port = process.env.PORT || 5000;
var app = express.createServer(express.logger());

app.use(express.bodyParser());

app.get('/*', function(request, response) {
    console.log("GET RECIEVED");
    var filePath = '.' + request.url;
    if (filePath == './') filePath = './index.html';

    var extension = path.extname(filePath);
    var contentType = 'text/html';
    switch (extension) {
        case '.html': contentType = 'text/html'; break;
        case '.js': contentType = 'text/javascript'; break;
        case '.css': contentType = 'text/css'; break;
    }

    fs.readFile(filePath, function(err, content) {
        if (err) {
            throw err;
        }
        response.writeHead(200, {'Content-Type' : contentType});
        response.write(content);
        console.log("GET RESPONDED");
        response.end();
    });
});

app.post('/', function(request, response){
    console.log("POST RECIEVED");
    
    var url = request.body.url;
    console.log("URL: " + url);
    //console.log("Github: " + github.gatherRepoInformation(url));
    response.writeHead(200, {'Content-Type' : 'text/plain'});
    console.log("Github: " + github.gatherRepoInformation(url));
    response.write(github.getLanguageFromFiletype(url));
    response.end();
});

app.listen(port, function() {
  console.log("Listening on " + port);
});



// http.createServer(function(request, response) {

//     console.log("REQUEST RECIEVED");
// 	var filePath = '.' + request.url;
// 	if (filePath == './') filePath = './index.html';

// 	var extension = path.extname(filePath);
// 	var contentType = 'text/html';
// 	switch (extension) {
// 		case '.html': contentType = 'text/html'; break;
// 		case '.js': contentType = 'text/javascript'; break;
// 		case '.css': contentType = 'text/css'; break;
// 	}

// 	fs.readFile(filePath, function(err, content) {
// 		if (err) {
// 			throw err;
// 		}
// 		response.writeHead(200, {'Content-Type' : contentType});
// 		response.write(content);
// 		response.end();
// 	});

// }).listen(port, function(){
// 	console.log("Listening on " + port);
// });

// Call github.gatherRepoInformation(jsonobj) to get back json (not implemented obvi)

// http.createServer(function(request, response) {

// 	var filePath = '.' + request.url;
// 	if (filePath == './') filePath = './index.html';

// 	var extension = path.extname(filePath);
// 	var contentType = 'text/html';
// 	switch (extension) {
// 		case '.html': contentType = 'text/html'; break;
// 		case '.js': contentType = 'text/javascript'; break;
// 		case '.css': contentType = 'text/css'; break;
// 	}

// 	fs.readFile(filePath, function(err, content) {
// 		if (err) {
// 			throw err;
// 		}
// 		response.writeHead(200, {'Content-Type' : contentType});
// 		response.write(content);
// 		response.end();
// 	});

// }).listen(port, function(){
// 	console.log("Listening on " + port);
// });

