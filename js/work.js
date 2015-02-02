$(document).ready(function () {
    $("#block2").hide();
    $("#block3").hide();
    $("#block4").hide();
    $("#block5").hide();

    var sec=1000;

    $("#v1").click(function () {
        $("#block1").fadeIn(sec);
        $("#block2").hide();
        $("#block3").hide();
        $("#block4").hide();
        $("#block5").hide();
    });

    $("#v2").click(function () {
        $("#block2").fadeIn(sec);
        $("#block1").hide();
        $("#block3").hide();
        $("#block4").hide();
        $("#block5").hide();
    });

    $("#v3").click(function () {
        $("#block3").fadeIn(sec);
        $("#block2").hide();
        $("#block4").hide();
        $("#block1").hide();
        $("#block5").hide();
    });
    $("#v4").click(function () {
        $("#block4").fadeIn(sec);
        $("#block2").hide();
        $("#block3").hide();
        $("#block1").hide();
        $("#block5").hide();
    });
    $("#v5").click(function () {
        $("#block5").fadeIn(sec);
        $("#block2").hide();
        $("#block3").hide();
        $("#block4").hide();
        $("#block1").hide();
    });
});
