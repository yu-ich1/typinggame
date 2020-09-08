$(function() {
    $('#start').click(function(){
      $('#start').fadeOut(0);
      $('#reset').fadeIn(1000);
  });  
});

$(function() {
  $('#reset').click(function(){
    $('#reset').fadeOut(0);
    $('#start').fadeIn(1000);
  });  
});