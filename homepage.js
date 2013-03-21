function sendGitHubURL() {
	var urlText = $('#url').val();
	if(urlText == ""){
		$('#url').removeClass("highlighted").addClass("error");
	}
};

$(document).ready(function(){
	$("input[type=text]").focusin(function() {
		$(this).addClass("highlighted");
	}).focusout(function() {
		$(this).removeClass("highlighted").removeClass("error");
	});

	$("#url").focus();
});