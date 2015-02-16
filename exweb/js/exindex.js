var con1_1=0;
var con1_2=0;
var con1_3=0;
var mt=500;
var ext= 1000;
var hold=0; 
var firstslidedown=0;

function bgc(){
    if(firstslidedown==0&&hold==0)
    {
        $(".bg").css("top","475");
        firstslidedown=1;
    }
    else if(con1_1==0&&con1_2==0&&hold==0)
    {
        firstslidedown=0;
    }
    
}

$("#mbody").ready(function(){
    con1_1=0;
    con1_2=0;
    con1_3=0;
    $("#extramenu").hide();
    $(".bg").hide();
    $("#content1_1").hide();
    $("#content1_2").hide();
    $("#content1_3").hide();
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
        bgc();
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
        bgc();
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
        bgc();
    });

    $("#gotopb").click(function(){
        $('html,body').stop().animate({
            scrollTop: 0,
        },ext);
        return false;

    });


    $(window).scroll(function(){
        if(firstslidedown==1)
        {
            if($(window).scrollTop()>=475)
            {   
                $("#gotop").show();
            }
            else
            {
                $("#gotop").hide();
            }
            if($(window).scrollTop()==($(document).height()-$(window).height()))
            {
                 $(".bg").stop().animate({
                top: $(window).scrollTop(),
                },0);
                $(".bg").fadeIn(ext);

            }
            else
            {
                $(".bg").hide();
            }


        }
    });

    $(".midmenu").click(function(){
        if(firstslidedown==1)
        {
             $(".bg").stop().animate({
                top: 475,
                },0);
            $(".bg").hide();
        }
    });
});
