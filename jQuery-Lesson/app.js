/*global $*/
$(function(){
  $('.open').on('click',function(){
    $('ul').children().slideDown();
  });
  $('.close').on('click',function(){
    $('ul').children().slideUp();
  });
});