$(document).ready(function () {

    smoothScroll(500);
    init();

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

    /* google map generator */

    google.maps.event.addDomListener(window, 'load', init);
    var map;
    function init() {
        var mapOptions = {
            center: new google.maps.LatLng(55.753395, 37.606422),
            zoom: 15,
            zoomControl: true,
            zoomControlOptions: {
                style: google.maps.ZoomControlStyle.DEFAULT
            },
            disableDoubleClickZoom: true,
            mapTypeControl: true,
            mapTypeControlOptions: {
                style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR
            },
            scaleControl: true,
            scrollwheel: true,
            panControl: true,
            streetViewControl: true,
            draggable: true,
            overviewMapControl: true,
            overviewMapControlOptions: {
                opened: false
            },
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: [{ "featureType": "all", "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#000000" }, { "lightness": 40 }] }, { "featureType": "all", "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#000000" }, { "lightness": 16 }] }, { "featureType": "all", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#000000" }, { "lightness": 20 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#000000" }, { "lightness": 17 }, { "weight": 1.2 }] }, { "featureType": "administrative", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "administrative.country", "elementType": "all", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "administrative.country", "elementType": "geometry", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "administrative.country", "elementType": "labels.text", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "administrative.province", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "administrative.locality", "elementType": "all", "stylers": [{ "visibility": "simplified" }, { "saturation": "-100" }, { "lightness": "30" }] }, { "featureType": "administrative.neighborhood", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "administrative.land_parcel", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "landscape", "elementType": "all", "stylers": [{ "visibility": "simplified" }, { "gamma": "0.00" }, { "lightness": "74" }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 20 }] }, { "featureType": "landscape.man_made", "elementType": "all", "stylers": [{ "lightness": "3" }] }, { "featureType": "poi", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 21 }] }, { "featureType": "road", "elementType": "geometry", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#000000" }, { "lightness": 17 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#000000" }, { "lightness": 29 }, { "weight": 0.2 }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 18 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 16 }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 19 }] }, { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 17 }] }]
        };
        var mapElement = document.getElementById('map');
        var map = new google.maps.Map(mapElement, mapOptions);
        var locations = [['Our Company', 'undefined', 'undefined', 'undefined', 'undefined', 55.7535278, 37.616283899999985, 'https://mapbuildr.com/assets/img/markers/ellipse-black.png']];
        for (i = 0; i < locations.length; i++) {
            if (locations[i][1] == 'undefined') {
                description = '';
            } else {
                description = locations[i][1];
            }
            if (locations[i][2] == 'undefined') {
                telephone = '';
            } else {
                telephone = locations[i][2];
            }
            if (locations[i][3] == 'undefined') {
                email = '';
            } else {
                email = locations[i][3];
            }
            if (locations[i][4] == 'undefined') {
                web = '';
            } else {
                web = locations[i][4];
            }
            if (locations[i][7] == 'undefined') {
                markericon = '';
            } else {
                markericon = locations[i][7];
            }
            marker = new google.maps.Marker({
                icon: markericon,
                position: new google.maps.LatLng(locations[i][5], locations[i][6]),
                map: map,
                title: locations[i][0],
                desc: description,
                tel: telephone,
                email: email,
                web: web
            });
            link = '';
        }
    }
});