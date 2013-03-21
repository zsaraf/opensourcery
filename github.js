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
	
	ghrepo.info(function(err, data) {
		console.log(data);
	});
    console.log("github url " + repo); 	
	var obj = { 'language' : 'JavaScript' };
	return obj;
}
