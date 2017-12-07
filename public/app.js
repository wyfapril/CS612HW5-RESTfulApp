$(document).ready(function() {
	$("#start-button").on("click", start);

	function start() {
		document.getElementById("welcome-page").style.display="none";
		document.getElementById("explore-page").style.display="block";
	}
});