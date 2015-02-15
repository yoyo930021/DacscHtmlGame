var con1_1=0;
var con1_2=0;
var mt=500;
var ext= 1000;
var hold=0; 
var firstslidedown=0;

function bgc(){
    if(firstslidedown==0&&hold==0)
    {
        $(".bg").fadeIn(ext);
        $("#mbody").animate({top:'50px'});
        firstslidedown=1;
    }
    else if(con1_1==0&&con1_2==0&&hold==0)
    {
        $(".bg").fadeOut(ext);
        $("#mbody").animate({top:'300px'});
        firstslidedown=0;
    }
    
}

$("#mbody").ready(function(){
    con1_1=0;
    con1_2=0;
    $("#extramenu").hide();
    $(".bg").hide();
    $("#content1_1").hide();
    $("#content1_2").hide();
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
    
});
