$(document).ready(function(){
    /*$(window).scroll(function () {
        $("#mainback").css("top",$(window).scrollTop());
    });*/

    


    $("#mmenu1").click(function(){
        $mmenu1='<iframe width="100%" height="100%" scrolling="yes" frameborder="0" src="exweb/ex1.htm"></iframe>';
          $("#exweb").html($mmenu1);
          return false;
    });

    $("#mmenu2").click(function(){
        $mmenu2='<iframe width="100%" height="100%" scrolling="yes" frameborder="0" src="exweb/ex2.htm"></iframe>';
          $("#exweb").html($mmenu2);
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

    $("#mmenu3_3").click(function(){
        $mmenu3_3='<iframe width="100%" height="100%" scrolling="yes" frameborder="0" src="exweb/ex33.htm"></iframe>';
          $("#exweb").html($mmenu3_3);
          return false;
    });

    $("#mmenu3_4").click(function(){
        $mmenu3_4='<iframe width="100%" height="100%" scrolling="yes" frameborder="0" src="exweb/ex34.htm"></iframe>';
          $("#exweb").html($mmenu3_4);
          return false;
    });

    $("#mmenu4_1").click(function(){
        $mmenu4_1='<iframe width="100%" height="100%" scrolling="yes" frameborder="0" src="exweb/ex41.htm"></iframe>';
          $("#exweb").html($mmenu4_1);
          return false;
    });

    $("#mmenu4_2").click(function(){
        $mmenu4_2='<iframe width="100%" height="100%" scrolling="yes" frameborder="0" src="exweb/ex42.htm"></iframe>';
          $("#exweb").html($mmenu4_2);
          return false;
    });

    $("#mmenu5_1").click(function(){
        $mmenu5_1='<iframe width="100%" height="100%" scrolling="yes" frameborder="0" src="exweb/ex51.htm"></iframe>';
          $("#exweb").html($mmenu5_1);
          return false;
    });

    $("#mmenu5_2").click(function(){
        $mmenu5_2='<iframe width="100%" height="100%" scrolling="yes" frameborder="0" src="exweb/ex52.htm"></iframe>';
          $("#exweb").html($mmenu5_2);
          return false;
    });

    $("#mmenu5_3").click(function(){
        $mmenu5_3='<iframe width="100%" height="100%" scrolling="yes" frameborder="0" src="exweb/ex53.htm"></iframe>';
          $("#exweb").html($mmenu5_3);
          return false;
    });

    $("#mmenu5_4").click(function(){
        $mmenu5_4='<iframe width="100%" height="100%" scrolling="yes" frameborder="0" src="exweb/ex54.htm"></iframe>';
          $("#exweb").html($mmenu5_4);
          return false;
    });

    $("#mmenu6_1").click(function(){
        $mmenu6_1='<iframe width="100%" height="100%" scrolling="yes" frameborder="0" src="exweb/ex61.htm"></iframe>';
          $("#exweb").html($mmenu6_1);
          return false;
    });

    $("#mmenu6_2").click(function(){
        $mmenu6_2='<iframe width="100%" height="100%" scrolling="yes" frameborder="0" src="exweb/ex62.htm"></iframe>';
          $("#exweb").html($mmenu6_2);
          return false;
    });

    $("#mmenu6_3").click(function(){
        $mmenu6_3='<iframe width="100%" height="100%" scrolling="yes" frameborder="0" src="exweb/ex63.htm"></iframe>';
          $("#exweb").html($mmenu6_3);
          return false;
    });

    $('.backimg').each(function(){
    // 先取得一些必要的參數, 例如寬高及要轉黑白的圖片
    // 同時先產生一個 canvas 元素
    var $this = $(this),
      _width = $this.width(),
      _height = $this.height(), 
      $canvas = $('<canvas></canvas>').css('position', 'absolute'),
      canvasE = $canvas[0], 
      $img = $this.find('img');
 
    // 設定 canvas 的寬高後加到 .canvas-div 中
    canvasE.width = _width;
    canvasE.height = _height;
    $this.append($canvas);
 
    // 把圖片畫在 canvas 上
    var context = canvasE.getContext('2d');
    context.drawImage($img[0], 0, 0, _width, _height);
 
    // 變更圖片的每一點的值
    var imgd = context.getImageData(0, 0, _width, _height);
    var pix = imgd.data;
    for(var i=0, n=pix.length; i<n; i+=4){
      var gray = pix[i] * 0.3 + pix[i+1] * 0.59 + pix[i+2] * 0.11;
      pix[i] = gray;
      pix[i+1] = gray;
      pix[i+2] = gray;
    }
    context.putImageData(imgd, 0, 0);
  });

    $('#mainback').cycle({
        fx: 'fade',
        timeout: 5000,
        random: 1
    });






});
