jQuery(function ($) {
    "use strict";

    $(window).load(function () { // makes sure the whole site is loaded
        //  "use strict";
        /*
        =======================================================
            // Preloader
        ======================================================
        */
        $('.preloader').delay(400).fadeOut('slow');


        /*
        =======================================================
            //Wow js initialization
        ======================================================
        */

        var wow = new WOW({
            offset: 100, // distance to the element when triggering the animation (default is 0)
            mobile: false // trigger animations on mobile devices (default is true)
        });
        wow.init();

    });

    //$(document).ready(function() {

    var element = $("div.navbar-fixed-top").autoHidingNavbar();
    //$("div.navbar-fixed-top").autoHidingNavbar({
    element.on("show.autoHidingNavbar", function () {
        $(this).addClass("navbar-bg-color");
    });
    element.on("hide.autoHidingNavbar", function () {
        $(this).removeClass("navbar-bg-color");
    });


    /*=======================================================
        // Vertical Center Welcome
    ======================================================*/
    setInterval(function () {
        var widnowHeight = $(window).height();
        var introHeight = $(".welcome-heading").height();
        var paddingTop = widnowHeight - introHeight;
        $(".welcome-heading").css({
            'padding-top': Math.round(paddingTop / 2) + 'px',
            'padding-bottom': Math.round(paddingTop / 2) + 'px'
        });
    }, 10);


    /*=======================================================
        Parallax Effects
    ======================================================*/

    //.parallax(xPosition, speedFactor, outerHeight) options:
    //xPosition - Horizontal position of the element
    //inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
    //outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
    $('.parallax').parallax("30%", 0.4);



    //});


    $(".navbar-nav li a[href^='#'], a[href^='#contact']").on('click', function (e) {
        // prevent default anchor click behavior
        e.preventDefault();

        // store hash
        var hash = this.hash;

        // animate
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000, function () {

            // when done, add hash to url
            // (default click behaviour)
            window.location.hash = hash;
        });

    });

    /*=======================================================
        Scroll To Top
    ======================================================*/

    $(document).on('scroll', function () {

        if ($(window).scrollTop() > 100) {
            $('.scroll-top-wrapper').addClass('show');
        } else {
            $('.scroll-top-wrapper').removeClass('show');
        }
    });
    $('.scroll-top-wrapper').on('click', scrollToTop);


    function scrollToTop() {
        var verticalOffset, offset, offsetTop;
        verticalOffset = typeof (verticalOffset) != 'undefined' ? verticalOffset : 0;
        element = $('body');
        offset = element.offset();
        offsetTop = offset.top;
        $('html, body').animate({
            scrollTop: offsetTop
        }, 500, 'linear');
    }


});