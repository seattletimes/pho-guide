// require("./lib/social");
// require("./lib/ads");
// var track = require("./lib/tracking");

require("component-responsive-frame/child");

var $ = require("./lib/qsa");

$(".listen").forEach(function(l) {
	l.addEventListener("click", function(e) {
		var id = e.target.getAttribute("data-word");
		document.querySelector("#" + id).play();
	});
});
