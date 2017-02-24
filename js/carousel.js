$(document).ready(function() {
    $("#owl-example").owlCarousel({
        loop:true,
        margin:20,
        items: 3,
        responsive:{
            0:{
                items:3
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    });
    var owl = $(".owl-carousel").data('owlCarousel');

    $('body').on('click', '.fa-angle-right', function() {
        owl.next();
    });

    $('body').on('click', '.fa-angle-left', function() {
        owl.prev();
    });
});
