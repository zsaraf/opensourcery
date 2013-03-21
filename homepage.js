function sendGitHubURL() {
	var urlText = $('#url').val();
	if(urlText == ""){
		$('#url').removeClass("highlighted").addClass("error");
	}
	var data = new Object();
	data.url = urlText;
	$.ajax({
		type: "POST",
		url: "/",
		data: data
	}).success(function(msg){
		alert(msg);
	}).fail(function(jqXHR, status){
		alert("Failure: " + status);
	});
};

$(document).ready(function(){
	$(".buttonsArea").css({"opacity": "0", visibility: "visible"});

	$("input[type=text]").focusin(function() {
		$(this).addClass("highlighted");
	}).focusout(function() {
		$(this).removeClass("highlighted").removeClass("error");
	}).keyup(function(){
		$(".buttonsArea").animate({"opacity": "1"},1000);
	});
	
	$("#url").focus();
});