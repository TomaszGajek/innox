$(document).ready(function(){

  var listItem = $('.works__list__item');

      thumb = $('.thumbnail');

  listItem.on('click',function(){

    var filter = $(this).text();

    listItem.removeClass('works__list__item--active');
    $(this).toggleClass('works__list__item--active');



    if(filter == 'All'){
      thumb.show();
    } else {
      thumb.hide();
      thumb.filter("."+filter).show();
    }

  });

  $("#owl-clients").owlCarousel({
    items:4,
    loop:true,
    margin: 10,
    responsiveClass:true,
    autoplay:true,
    autoplayTimeout:2500,
    responsive:{
        0:{
            items:1,
            nav: true
        },
        600:{
            items:3,
            nav: true
        },
        1000:{
            items:4,
            nav: true
        }
    }
  });



});
