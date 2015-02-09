$(document).ready(function(){
    $(window).scroll(function () {
        $("#mainback").css("top",$(window).scrollTop());
        });

    $("#emenu1").hide();
    $("#emenu2").hide();
    $("#emenu3").hide();
    $("#emenu4").hide();
    $("#emenu5").hide();
    $("#emenu1_1_1").hide();

    var sec=500;
    var eme1_1=0;

    $("#mbutton1").click(function(){
        $("#emenu1").slideDown(sec);
        $("#emenu2").hide();
        $("#emenu3").hide();
        $("#emenu4").hide();
        $("#emenu5").hide();
    });

    $("#emenu1_1").click(function(){
        if(eme1_1==0)
        {
            $("#emenu1_1_1").slideDown(sec);
            eme1_1=1;
        }
        else
        {
            $("#emenu1_1_1").slideUp(sec);
            eme1_1=0;
        }
    });

    $("#mbutton2").click(function(){
        $("#emenu1_1_1").hide();
        $("#emenu1").hide();
        $("#emenu2").slideDown(sec);
        $("#emenu3").hide();
        $("#emenu4").hide();
        $("#emenu5").hide();
        eme1_1=0;
    });

    $("#mbutton3").click(function(){
        $("#emenu1").hide();
        $("#emenu1_1_1").hide();
        $("#emenu2").hide();
        $("#emenu3").slideDown(sec);
        $("#emenu4").hide();
        $("#emenu5").hide();
        eme1_1=0;
    });

    $("#mbutton4").click(function(){
        $("#emenu1").hide();
        $("#emenu2").hide();
        $("#emenu3").hide();
        $("#emenu4").slideDown(sec);
        $("#emenu5").hide();
        eme1_1=0;
    });

    $("#mbutton5").click(function(){
        $("#emenu1").hide();
        $("#emenu1_1_1").hide();
        $("#emenu2").hide();
        $("#emenu3").hide();
        $("#emenu4").hide();
        $("#emenu5").slideDown(sec);
        eme1_1=0;
    });

    $('#mainback').cycle({
        fx: 'fade',
        timeout: 5000,
        random: 1
    });

});
