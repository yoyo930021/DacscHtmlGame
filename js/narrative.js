var s = 0;
var t = 0;
var y = 0;
var current=1;
var ext = 500;
var p1,p2,p3,p4;
var y1,y2,y3,y4;
$(document).ready(function () {
    p1 = document.getElementById("test1")
    p2 = document.getElementById("test2")
    p3 = document.getElementById("test3")
    p4 = document.getElementById("test4")
    y1 = p1.offsetTop;
    y2 = p2.offsetTop;
    y3 = p3.offsetTop;
    y4 = p4.offsetTop;
    $(window).scroll(function () {
            $("#mainback").css("top",$(window).scrollTop());
            var A = $(this).scrollTop();
            if (A < y2-50) {
                current=1;
                $("#hdbtn1").css("text-shadow", "0px 0px 8px #f00");
                $("#hdbtn2").css("text-shadow", "");
                $("#hdbtn3").css("text-shadow", "");
                $("#hdbtn4").css("text-shadow", "");
            } else if (A < y3-50) {
                current=2;
                $("#hdbtn1").css("text-shadow", "");
                $("#hdbtn2").css("text-shadow", "0px 0px 8px #f00");
                $("#hdbtn3").css("text-shadow", "");
                $("#hdbtn4").css("text-shadow", "");
            } else if (A < y4-50) {
                current=3;
                $("#hdbtn1").css("text-shadow", "");
                $("#hdbtn2").css("text-shadow", "");
                $("#hdbtn3").css("text-shadow", "0px 0px 8px #f00");
                $("#hdbtn4").css("text-shadow", "");
            } else if (A < $(document).height()) {
                current=4;
                $("#hdbtn1").css("text-shadow", "");
                $("#hdbtn2") .css("text-shadow", "");
                $("#hdbtn3").css("text-shadow", "");
                $("#hdbtn4").css("text-shadow", "0px 0px 8px #f00");
            }
    });
    
    $("#hdbtn4").click(function () {
        if(current!=4)
        {
           ext=500; 
        }   
        $('html,body').stop().animate({
            scrollTop: y4,
        },ext);
        ext=1000;
        return false; 
        
    });
    $("#hdbtn3").click(function () {
        if(current!=3)
        {
           ext=500; 
        }   
        $('html,body').stop().animate({
            scrollTop: y3,
        },ext);
        ext=1000;
        return false; 
        
    });
    $("#hdbtn2").click(function () {
        if(current==2)
        {
           ext=500; 
        }   
        $('html,body').stop().animate({
            scrollTop: y2,
        },ext);
        ext=1000;
        return false;  
    });
    $("#hdbtn1").click(function () {
        if(current==1)
        {
           ext=500; 
        }   
        $('html,body').stop().animate({
            scrollTop: y1,
        },ext);
        ext=1000;
        return false;    
    });

    $('#mainback').cycle({
        fx: 'fade',
        timeout: 5000,
        random: 1
    });
});
