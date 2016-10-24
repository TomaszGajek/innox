$(document).ready(function(){

  var listItem = $('.works__list__item');


  listItem.on('click',function(){
    listItem.removeClass('works__list__item--active');
    $(this).toggleClass('works__list__item--active');


  });








});
