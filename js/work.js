$(document).ready(function(){
    $(window).scroll(function () {
        $("#mainback").css("top",$(window).scrollTop());
    });
    $("#mmenu1_1").click(function(){
        $mmenu1_1='<iframe width="100%" height="100%" scrolling="yes" frameborder="0" src="exweb/ex11.htm"></iframe>';
          $("#exweb").html($mmenu1_1);
          return false;
    });

    $("#mmenu1_2").click(function(){
        $mmenu1_2='<iframe width="100%" height="100%" scrolling="yes" frameborder="0" src="exweb/ex12.htm"></iframe>';
          $("#exweb").html($mmenu1_2);
          return false;
    });

    $("#mmenu2_1").click(function(){
        $mmenu2_1='<iframe width="100%" height="100%" scrolling="yes" frameborder="0" src="exweb/ex21.htm"></iframe>';
          $("#exweb").html($mmenu2_1);
          return false;
    });

    $("#mmenu2_2").click(function(){
        $mmenu2_2='<iframe width="100%" height="100%" scrolling="yes" frameborder="0" src="exweb/ex22.htm"></iframe>';
          $("#exweb").html($mmenu2_2);
          return false;
    });

    $("#mmenu3_1").click(function(){
        $mmenu3_1='<iframe width="100%" height="100%" scrolling="yes" frameborder="0" src="exweb/ex31.htm"></iframe>';
          $("#exweb").html($mmenu3_1);
          return false;
    });

    $("#mmenu3_2").click(function(){
        $mmenu3_2='<iframe width="100%" height="100%" scrolling="yes" frameborder="0" src="exweb/ex32.htm"></iframe>';
          $("#exweb").html($mmenu3_2);
          return false;
    });

    $("#mmenu4").click(function(){
        $mmenu4='<iframe width="100%" height="100%" scrolling="yes" frameborder="0" src="exweb/ex4.htm"></iframe>';
          $("#exweb").html($mmenu4);
          return false;
    });

    $("#mmenu5").click(function(){
        $mmenu5='<iframe width="100%" height="100%" scrolling="yes" frameborder="0" src="exweb/ex5.htm"></iframe>';
          $("#exweb").html($mmenu5);
          return false;
    });

    $('#mainback').cycle({
        fx: 'fade',
        timeout: 5000,
        random: 1
    });






});
