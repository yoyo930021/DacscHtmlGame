var s = 1;
var f = 0;
$(document).ready(function () {
	$("#groupbutton").hide();
	$("#grtop").hide();
	$("#title").hide();
	//var $ofweidht = innerWidth;
	/*if ($ofweidht <= 767) {
		$("#mainback").hide();
	} else {*/
		$('#mainback').cycle({
			fx: 'fade',
			timeout: 5000,
			random: 1
		});
	//}
});

function start1() {
	var t = setTimeout("start()", 500);
}

function start() {
	$("#title").fadeIn(1200);
	$("#groupbutton").fadeIn(1000);
	$("#grtop").fadeIn(1000);
}
