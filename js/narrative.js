var s = 0;
var t = 0;
var y = 0;
var b = 0;
var p1,p2,p3,p4;
var y1,y2,y3,y4;
$(document).ready(function () {
    p1=$("#text1").offset();
    p2=$("#text2").offset();
    p3=$("#text3").offset();
    p4=$("#text4").offset();
    /*y1=p1.top();
    y2=p2.top();
    y3=p3.top();
    y4=p4.top();*/
    $(window).scroll(function () {
            $("#mainback").css("top",$(window).scrollTop());
        if (b == 0) {
            var A = $(this).scrollTop();
            if (A < 55) {
                $("#hdbtn1").css("text-shadow", "0px 0px 8px #f00");
                $("#hdbtn2").css("text-shadow", "");
                $("#hdbtn3").css("text-shadow", "");
                $("#hdbtn4").css("text-shadow", "");
            } else if (A < document.body.clientHeight * 2) {
                $("#hdbtn1").css("text-shadow", "");
                $("#hdbtn2").css("text-shadow", "0px 0px 8px #f00");
                $("#hdbtn3").css("text-shadow", "");
                $("#hdbtn4").css("text-shadow", "");
            } else if (A < document.body.clientHeight * 3) {
                $("#hdbtn1").css("text-shadow", "");
                $("#hdbtn2").css("text-shadow", "");
                $("#hdbtn3").css("text-shadow", "0px 0px 8px #f00");
                $("#hdbtn4").css("text-shadow", "");
            } else if (A < document.body.clientHeight * 4) {
                $("#hdbtn1").css("text-shadow", "");
                $("#hdbtn2").css("text-shadow", "");
                $("#hdbtn3").css("text-shadow", "");
                $("#hdbtn4").css("text-shadow", "0px 0px 8px #f00");
            }
        }
    });
    /*
    $("#hdbtn4").click(function () {
        b = 1;
        //alert(document.body.clientHeight * 3);
        var temp = document.body.clientHeight * 3;
        $(window).scrollTop(temp);
        b = 0;
    });
    $("#hdbtn3").click(function () {
        b = 1;
        //alert(document.body.clientHeight * 2);
        var temp = document.body.clientHeight * 2;
        $(window).scrollTop(temp);
        b = 0;
    });
    $("#hdbtn2").click(function () {
        b = 1;
        //alert(document.body.clientHeight * 1);
        var temp = document.body.clientHeight * 1;
        $(window).scrollTop(temp);
        b = 0;
    });
    $("#hdbtn1").click(function () {
        b = 1;
        //alert(document.body.clientHeight * 0);
        var temp = document.body.clientHeight * 0;
        $(window).scrollTop(temp);
        b = 0;
    });*/
    $('#mainback').cycle({
        fx: 'fade',
        timeout: 5000,
        random: 1
    });
});
