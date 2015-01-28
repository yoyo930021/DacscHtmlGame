var s = 0;
var t = 0;
var y = 0;
$(document).ready(function () {
    $(window).scroll(function () {
        y++;
        if (y>2) {
            if ($(this).scrollTop() > t) {
                s++;
                $(this).scrollTop(document.body.clientHeight * s);
                t = $(this).scrollTop();
                y=0;
            } else {
                s--;
                if(s>3)
                {
                    s--;
                }
                $(this).scrollTop(document.body.clientHeight * s);
                t = $(this).scrollTop();
                y=0;
            }
        }
        var A = $(this).scrollTop();
        if (A < document.body.clientHeight * 1) {
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
    });
});
