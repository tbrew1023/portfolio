$(window).ready(function() {
  console.log("window is ready");
  //console.log("port1 pos: " + $(".port1").getBoundingClientRect().top);

});

$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  //console.log(scroll);

  $(".parallax").css({
    "opacity":((200-(scroll/2.5))/100),
    "top": 240 + (scroll / 2) + "px"
  });

  $(".parallax h1").css({
   // "margin-top":(40-(scroll/8))
  });

  if(scroll >= 400) {
    $(".port3").css({
      "opacity":"1",
      "margin-top":"0px"
    });
    setTimeout(function() {
      $(".port1").css({
        "opacity":"1",
        "margin-top":"0px"
      });
    }, 300);
  }
  if(scroll >= 800) {
    $(".port5").css({
      "opacity":"1",
      "margin-top":"0px"
    });
    setTimeout(function() {
      $(".port6").css({
        "opacity":"1",
        "margin-top":"0px"
      });
    }, 300);
  }
  if(scroll >= 1200) {
    $(".port7").css({
      "opacity":"1",
      "margin-top":"0px"
    });
    setTimeout(function() {
      $(".port8").css({
        "opacity":"1",
        "margin-top":"0px"
      });
    }, 300);
  }
});