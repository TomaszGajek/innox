$(document).ready(function () {

  smoothScroll(500);

  /* works item plugin */

  var listItem = $('.works__list__item');

  thumb = $('.thumbnail');

  listItem.on('click', function () {

    var filter = $(this).text();

    listItem.removeClass('works__list__item--active');
    $(this).toggleClass('works__list__item--active');

    if (filter == 'All') {
      thumb.show();
    } else {
      thumb.hide();
      thumb.filter("." + filter).show();
    }
  });

  /* owl plugin */

  $("#owl-clients").owlCarousel({
    items: 4,
    loop: true,
    margin: 10,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 2500,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 3,
        nav: true
      },
      1000: {
        items: 4,
        nav: true
      }
    }
  });

  $("#owl-service").owlCarousel({
    items: 3,
    loop: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 1,
        nav: true
      },
      1000: {
        items: 1,
        nav: true
      }
    }

  });

  /* smooth scrool */

  function smoothScroll(duration) {
    $('a[href^="#"]').on('click', function (event) {

      var target = $($(this).attr('href'));

      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, duration);
      }
    });
  }
});