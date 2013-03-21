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
	$(".buttonsArea").hide();

	$("input[type=text]").focusin(function() {
		$(this).addClass("highlighted");
	}).focusout(function() {
		$(this).removeClass("highlighted").removeClass("error");
	}).keyup(function(){
		$(".buttonsArea").show("slow");
	});
	
	$("#url").focus();
});