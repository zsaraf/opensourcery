var http = require('http')
var fs   = require('fs');
var path = require('path');

var port = process.env.PORT || 5000;

http.createServer(function(request, response) {

	var filePath = '.' + request.url;
	if (filePath == './') filePath = './index.html';

	var extension = path.extname(filePath);
	var contentType = '';
	switch (extension) {
		case '.html': contentType = 'text/html'; break;
		case '.js': contentType = 'text/javascript'; break;
		case '.css': contentType = 'text/css'; break;
	}

	fs.readFile(filePath, function(err, content) {
		if (err) {
			throw err;
		}
		response.writeHeader(200, {'Content-Type' : contentType});
		response.write(content);
		response.end();
	});

}).listen(port, function(){
	console.log("Listening on " + port);
});




// fs.readFile('./index.html', function (err, html) {
//     if (err) {
//         throw err; 
//     }    
//     var port = process.env.PORT || 5000;   
//     http.createServer(function(request, response) {  
//         response.writeHeader(200, {"Content-Type": "text/html"});  
//         response.write(html);  
//         response.end();  
//     })
// });
