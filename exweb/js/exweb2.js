var con1_1=0;
var con1_2=0;
var mt=500;
var ext= 1000;
var hold=0; 
var firstslidedown=0;

function bgc(){
    if(firstslidedown==0)
    {
        $("#extramenu").css("background","rgba(0%,0%,0%,1.0)");
        firstslidedown=1;
    }
    else if(con1_1==0&&con1_2==0)
    {
        setTimeout(function(){$("#extramenu").css("background","rgba(0%,0%,0%,0.0)")},ext);
        firstslidedown=0;
    }
    
}

$("#mbody").ready(function(){
    con1_1=0;
    $("#extramenu").css("background","rgba(0%,0%,0%,0.0)");
    $("#extramenu").hide();
    $("#content1_1").hide();
    $("#content1_2").hide();
    $("#extramenu").slideDown(mt);

    $("#midmenu1_1").click(function(){
        
        if(con1_1==0&&hold==0)
        {          
            $("#content1_1").slideDown(ext);
            hold=1;
            con1_1=1;
        }
        else if(con1_1==1&&hold==0)
        {
            $("#content1_1").slideUp(ext);
            hold=1;
            con1_1=0;
        }
        hold=0;
        bgc();
    });

    $("#midmenu1_2").click(function(){
        
        if(con1_2==0&&hold==0)
        {          
            $("#content1_2").slideDown(ext);
            hold=1;
            con1_2=1;
        }
        else if(con1_2==1&&hold==0)
        {
            $("#content1_2").slideUp(ext);
            hold=1;
            con1_2=0;
        }
        hold=0;
        bgc();
    });
    
});
