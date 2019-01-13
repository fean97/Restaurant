$(function () {
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 100) {
            $('.menu').addClass('scroll');
        } else {
            $('.menu').removeClass('scroll');
        }
    });

    $('.line').on('click', function () {
        $('.submenu').addClass('scroll');
        $('.list-inline').addClass('open');
    });
    $('.exit').on('click', function () {
        $('.submenu').removeClass('scroll');
        $('.list-inline').removeClass('open');
    });

    $('.owl-1').owlCarousel({
        items: 1,
        nav: false,
        dots: true,
        margin: 60,
        loop: true,
        autoplay: true,
    });

    $('.owl-2').owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 2000,
        loop: true,
        nav: false,
        dots: false,
        margin: 20,
    });

    $('.gallery-grid').isotope({
        itemSelector: '.gallery-item',
        layoutMode: 'fitRows',
    });

    $('.scrolltop').on('click', function (e) {
        e.preventDefault;
        $('html, body').animate({
            scrollTop: 0
        }, 2000);

    });


});

function initMap() {
    // The location of Uluru
    var uluru = {
        lat: -25.344,
        lng: 131.036
    };
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('main-map'), {
            zoom: 4,
            center: uluru
        });
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}

