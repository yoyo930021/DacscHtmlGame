var con1_1=0;
var mt=500;
var ext= 1000;

$("#mbody").ready(function(){
    con1_1=0;
    $("#extramenu").hide();
    $("#content1_1").hide();
    $("#extramenu").slideDown(mt);

    $("#midmenu1_1").click(function(){
        if(con1_1==0)
        {
            $("#content1_1").slideDown(ext);
            con1_1=1;
        }
        else
        {
            $("#content1_1").slideUp(ext);
            con1_1=0;
        }
    });
});
