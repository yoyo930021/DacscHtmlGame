$(document).ready(function(){
    $("#emenu1").hide();
    $("#emenu2").hide();
    $("#emenu3").hide();
    $("#emenu4").hide();
    $("#emenu5").hide();

    var sec=500;

    $("#mbutton1").click(function(){
        $("#emenu1").fadeIn(sec);
        $("#emenu2").hide();
        $("#emenu3").hide();
        $("#emenu4").hide();
        $("#emenu5").hide();
    });

    $("#mbutton2").click(function(){
        $("#emenu2").fadeIn(sec);
        $("#emenu1").hide();
        $("#emenu3").hide();
        $("#emenu4").hide();
        $("#emenu5").hide();
    });

    $("#mbutton3").click(function(){
        $("#emenu3").fadeIn(sec);
        $("#emenu1").hide();
        $("#emenu2").hide();
        $("#emenu4").hide();
        $("#emenu5").hide();
    });

    $("#mbutton4").click(function(){
        $("#emenu4").fadeIn(sec);
        $("#emenu1").hide();
        $("#emenu2").hide();
        $("#emenu3").hide();
        $("#emenu5").hide();
    });

    $("#mbutton5").click(function(){
        $("#emenu5").fadeIn(sec);
        $("#emenu1").hide();
        $("#emenu2").hide();
        $("#emenu3").hide();
        $("#emenu4").hide();
    });

});
