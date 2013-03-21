var github = require('octonode');

exports.gatherRepoInformation = function(urlAsJson) {
	//var url = JSON.parse(urlAsJson).url;
	
	var client = github.client();
	
	var ghrepo = client.repo('zsaraf/opensourcery');
	
	ghrepo.info(function(err, data) {
		console.log(data);
	});

	var obj = { 'language' : 'JavaScript' };
	return obj;
}