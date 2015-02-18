$("#mbody").ready(function(){


    $(window).scroll(function(){
                if($(window).scrollTop()>=525)
                {
                    $(".bg").show();
                    $(".bg").stop().animate({
                    top: $(window).scrollTop(),
                    },0);
                    $("#gotop").show();
                }
                else
                {
                    $(".bg").stop().animate({
                    top: 525,
                    },0);
                    $("#gotop").hide();
                    $(".bg").hide();
                }
    });

    $("#gotopb").click(function(){
            $('html,body').stop().animate({
                scrollTop: 0,
            },ext);
            return false;
    });
});