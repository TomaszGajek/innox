$(document).ready(function(){

  smoothScroll(500);

  /* works item plugin */

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

  /* owl plugin */

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

  $("#owl-service").owlCarousel({
    items:3,
    loop:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav: true
        },
        600:{
            items:1,
            nav: true
        },
        1000:{
            items:1,
            nav: true
        }
    }

  });

  /* smooth scrool */

  function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {

	    var target = $( $(this).attr('href') );

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top
	        }, duration);
	    }
	  });
  }

<script src='https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyC7N6iKUHz8nABNk3RH0_HKQk7Vi1rnxNM'></script><div style='overflow:hidden;height:400px;width:520px;'><div id='gmap_canvas' style='height:400px;width:520px;'></div><style>#gmap_canvas img{max-width:none!important;background:none!important}</style></div> <a href='http://maps-generator.com/pl'>Maps Generator PL</a> <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=96008d28964585a1fe0284ffe37000465a88d11a'></script><script type='text/javascript'>function init_map(){var myOptions = {zoom:12,center:new google.maps.LatLng(55.73901442349524,37.70793720703124),mapTypeId: google.maps.MapTypeId.ROADMAP};map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);marker = new google.maps.Marker({map: map,position: new google.maps.LatLng(55.73901442349524,37.70793720703124)});infowindow = new google.maps.InfoWindow({content:'<strong></strong><br><br> Moskow<br>'});google.maps.event.addListener(marker, 'click', function(){infowindow.open(map,marker);});infowindow.open(map,marker);}google.maps.event.addDomListener(window, 'load', init_map);</script>




});
