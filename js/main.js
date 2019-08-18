$(document).ready(function() {
	// aanything to do here
});

function stealSsn() {
	document.getElementById("ssn-finished").style.display = "none";
  document.getElementById("ssn-starting").style.display = "block";
  setTimeout(function () { stealSsnFinished(); }, 3000);
}

function stealSsnFinished() {
	document.getElementById("ssn-starting").style.display = "none";
	document.getElementById("ssn-finished").style.display = "block";
}
