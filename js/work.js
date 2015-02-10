$(document).ready(function(){
    $(window).scroll(function () {
        $("#mainback").css("top",$(window).scrollTop());
    });
    $("#mmenu1").click(function(){
        $mmenu1='<iframe width="100%" height="100%" scrolling="yes" frameborder="0" src="../exweb/ex01.htm"></iframe>';
          $("#exweb").html($mmenu1);
          return false;
    });

    $("#mmenu2").click(function(){
        $mmenu2='<iframe width="100%" height="100%" scrolling="yes" frameborder="0" src="../exweb/ex02.htm"></iframe>';
          $("#exweb").html($mmenu2);
          return false;
    });

    $("#mmenu3").click(function(){
        $mmenu3='<iframe width="100%" height="100%" scrolling="yes" frameborder="0" src="../exweb/ex03.htm"></iframe>';
          $("#exweb").html($mmenu3);
          return false;
    });

    $("#mmenu4").click(function(){
        $mmenu4='<iframe width="100%" height="100%" scrolling="yes" frameborder="0" src="../exweb/ex04.htm"></iframe>';
          $("#exweb").html($mmenu4);
          return false;
    });

    $("#mmenu5").click(function(){
        $mmenu5='<iframe width="100%" height="100%" scrolling="yes" frameborder="0" src="../exweb/ex05.htm"></iframe>';
          $("#exweb").html($mmenu5);
          return false;
    });

    $('#mainback').cycle({
        fx: 'fade',
        timeout: 5000,
        random: 1
    });






});
