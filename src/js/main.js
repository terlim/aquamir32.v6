//= ../../node_modules/jquery/dist/jquery.js
//= ../../node_modules/popper.js/dist/umd/popper.js
//= ../../bower_components/bootstrap-offcanvas/dist/js/bootstrap.offcanvas.js
//= ../../node_modules/bootstrap/js/dist/util.js
//= ../../node_modules/bootstrap/js/dist/collapse.js
//= ../../node_modules/bootstrap/js/dist/dropdown.js
//= ../../node_modules/bootstrap/js/dist/tooltip.js
//= ../../node_modules/bootstrap/js/dist/tab.js
//= ../../node_modules/swiper/dist/js/swiper.js
//= ../../node_modules/materialize-css/js/waves.js

$(document).ready(function () {
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })
})
$(document).ready(function () {
    //initialize swiper when document ready
    var mySwiper = new Swiper ('#swiper-promo', {
        // Disable preloading of all images
        preloadImages: false,
        // Enable lazy loading
        lazy: {
            loadPrevNext: true,
        },
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

$(document).ready(function () {
    //initialize swiper when document ready
    var mySwiper = new Swiper ('#top-sales', {
        // Disable preloading of all images
        preloadImages: true,
        // Enable lazy loading
        lazy: false,

        // Optional parameters
        direction: 'horizontal',
        loop: true,
        grabCursor: true,


        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },


        // Default parameters
        slidesPerView: 3,
        spaceBetween: 30,
        // Responsive breakpoints
        breakpoints: {
            // when window width is <= 576px
            576: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            // when window width is <= 980px
            992: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            // when window width is <= 1200px
            1200: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            // when window width is <= 1670px
            1670: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            // when window width is <= 1920px
            1920: {
                slidesPerView: 4,
                spaceBetween: 30
            }
        }
    });

});





