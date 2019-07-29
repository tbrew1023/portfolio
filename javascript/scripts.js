$(window).ready(function() {
  console.log("it's gonna be ok:)");
})

$(".gal-image").click(function() {
  var currentImage = $(".expanded .image")[0].src;
  var newImage = this.children[0].src;
  currentImage = newImage;
  console.log("clicked image");
  console.log("current image: " + currentImage);
  $(".expanded").css({
    "opacity":"1",
    "pointer-events":"all"
  });
  $(".expanded .image")[0].src=currentImage;
  $(".expanded").click(function() {
    console.log("back to gallery");
    $(this).css({
      "pointer-events":"none",
      "opacity":"0"
    });
  });
  
});

/*$(".expanded") {

}*/