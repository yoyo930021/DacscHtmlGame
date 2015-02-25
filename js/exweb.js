var con1_1=0;
var con1_2=0;
var con1_3=0;
var con1_4=0;
var con1_5=0;
var mt=500;
var ext= 1000;
var hold=0; 

$("#mbody").ready(function(){
    con1_1=0;
    con1_2=0;
    con1_3=0;
    con1_4=0;
    con1_5=0;
    $("#extramenu").hide();
    $(".bg").hide();
    $("#content1_1").hide();
    $("#content1_2").hide();
    $("#content1_3").hide();
    $("#content1_4").hide();
    $("#content1_5").hide();
    $("#gotop").hide();
    $("#extramenu").slideDown(mt);

    $("#midmenu1_1").click(function(){
            if(hold==0)
            {
                if(con1_1==0)
                {
                    con1_1=1;
                }
                else
                {
                    con1_1=0;
                }
                hold=1
                $("#content1_1").slideToggle(ext);
            }
        hold=0;
    });

    $("#midmenu1_2").click(function(){
            if(hold==0)
            {
                if(con1_2==0)
                {
                    con1_2=1;
                }
                else
                {
                    con1_2=0;
                }
                hold=1
                $("#content1_2").slideToggle(ext);
            }
        hold=0;
    });

    $("#midmenu1_3").click(function(){
            if(hold==0)
            {
                if(con1_3==0)
                {
                    con1_3=1;
                }
                else
                {
                    con1_3=0;
                }
                hold=1
                $("#content1_3").slideToggle(ext);
            }
        hold=0;
    });
    
    $("#midmenu1_4").click(function(){
            if(hold==0)
            {
                if(con1_4==0)
                {
                    con1_4=1;
                }
                else
                {
                    con1_4=0;
                }
                hold=1
                $("#content1_4").slideToggle(ext);
            }
        hold=0;
    });
    
    $("#midmenu1_5").click(function(){
            if(hold==0)
            {
                if(con1_5==0)
                {
                    con1_5=1;
                }
                else
                {
                    con1_5=0;
                }
                hold=1
                $("#content1_5").slideToggle(ext);
            }
        hold=0;
    });

    $(window).scroll(function(){
                if($(window).scrollTop()>=525)
                {
                   /* $(".bg").show();
                    $(".bg").stop().animate({
                    top: $(window).scrollTop(),
                    },0);*/
                    $("#gotop").show();
                }
                else
                {
                 /*   $(".bg").stop().animate({
                    top: 525,
                    },0);*/
                    $("#gotop").hide();
                 /*   $(".bg").hide();*/
                }
    });

    $("#gotopb").click(function(){
            $('html,body').stop().animate({
                scrollTop: 0,
            },ext);
            return false;
    });
    
});
