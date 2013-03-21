var github = require('octonode');

exports.gatherRepoInformation = function(urlAsJson) {
	//var url = JSON.parse(urlAsJson).url;
	var client = github.client();
	
    var searchFor = new String("https://github.com/");

    var index = urlAsJson.search(searchFor);
    if (index == -1) return "This is not a valid github repository";
    console.log("" + (searchFor).length);
    var repo = urlAsJson.substring(searchFor.length, urlAsJson.length - 1);
    console.log(repo);

	var ghrepo = client.repo(repo);
    
    var files = new Array();
    getAllFiles(ghrepo, '/', files);

    for (var i = 0; i < files.length; i++) console.log("File " + files[i]);

	ghrepo.info(function(err, data) {
        console.log("\n\nGENERAL INFO\n\n");
		console.log(data);
	});


    ghrepo.languages(function(err, data) {
        console.log("\n\nLANGUAGE INFO\n\n");
        console.log(data);
    });


    ghrepo.tags(function(err, data) {
        console.log("\n\nTAGS INFO\n\n");
        console.log(data);
    });

    console.log("github url " + repo); 	
	var obj = { 'language' : 'JavaScript' };
	return obj;
}

function getAllFiles(ghrepo, dir, files) {
    
    ghrepo.contents(dir, function(err, data) {
        var str = data;
        if (str == null) return;
        for (var i = 0; i < str.length; i++) {
            var obj = str[i];
            var path = obj.path;
            var type = obj.type;
            if (type == 'dir') {
                getAllFiles(ghrepo, dir + path + '/', files);
            } else {
                files[files.length] = path;
            }
            console.log('Path: ' + obj.path + ' Type: ' + obj.type);
        }
    });
}
