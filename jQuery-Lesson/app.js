/*global $*/
$(function(){
  $('.box1').slideDown(1000,function(){
      $('.box1').css({
          'background':'#0000FF',
          'width':'200px',
          'height':'100px'
      }).slideUp(1000);
  });
});