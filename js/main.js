$('#page-top a').click(function() {
  var position = 0;
  var speed = 300;
  $("html, body").animate({scrollTop:position}, speed);
});