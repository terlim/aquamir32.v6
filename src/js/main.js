//= ../../node_modules/jquery/dist/jquery.js
//= ../../node_modules/popper.js/dist/umd/popper.js
//= ../../bower_components/bootstrap-offcanvas/dist/js/bootstrap.offcanvas.js
//= ../../node_modules/bootstrap/js/dist/util.js
//= ../../node_modules/bootstrap/js/dist/collapse.js
//= ../../node_modules/bootstrap/js/dist/dropdown.js
//= ../../node_modules/swiper/dist/js/swiper.js
//= ../../node_modules/materialize-css/js/waves.js

$(document).ready(function () {
    //initialize swiper when document ready
    var mySwiper = new Swiper ('#swiper-promo', {
        // Disable preloading of all images
        preloadImages: false,
        // Enable lazy loading
        lazy: true,
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        grabCursor: true,
        effect: 'fade',
        speed: 1000,


        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        autoplay: {
            delay: 4000,
        },

        // Default parameters
        slidesPerView: 1,
        spaceBetween: 30,
        loadPrevNextAmount: 2,

    });

});


