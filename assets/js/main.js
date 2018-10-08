jQuery(function ($) {
    "use strict";

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
        var welcomeHeading =   $(".welcome-heading");
        var introHeight = welcomeHeading.height();
        var paddingTop = widnowHeight - introHeight;
        welcomeHeading.css({
            'padding-top': Math.round(paddingTop / 2) + 'px',
            'padding-bottom': Math.round(paddingTop / 2) + 'px'
        });
    }, 10);



    /*=======================================================
        Portfolio Filtering
    ======================================================*/

    var filterizd = $('#filtr-container').filterizr({    //options object
    });

    $('#filter li span').on('click', function () {
        $('#filter li span').removeClass('active');
        $(this).addClass('active');
    });

    /*=======================================================
        Testimonial Slider
    ======================================================*/
    var owl = $("#owl-tm");
    owl.owlCarousel({
        singleItem: true,
        autoPlay: 5000,
        stopOnHover: true
    });


    /*=======================================================
        Parallax Effects
    ======================================================*/

    //.parallax(xPosition, speedFactor, outerHeight) options:
    //xPosition - Horizontal position of the element
    //inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
    //outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
    $('.parallax').parallax("30%", 0.4);


    /*=======================================================
        Magnific Popup
    ======================================================*/

    // Portfolio Item Inline popup (type inline)
    $('.inline-popup-trigger').magnificPopup({
        type: 'inline',
        modal: false,
        alignTop: true,
        fixedContentPos: true,
        fixedBgPos: false,
        overflowY: 'auto',
        closeBtnInside: true,
        preloader: false,
        midClick: true,
        removalDelay: 300,
        mainClass: 'mfp-fade-zoom',
        gallery: {
            enabled: true, // enable or disable gallery (false/true)
            arrowMarkup: '<button title="%title%" type="button" class="mfp-custom-arrow mfp-custom-arrow-%dir%"></button>', // markup of an arrow button
            tPrev: 'Previous (Left arrow key)', // title for left button
            tNext: 'Next (Right arrow key)' // title for right button
        }
    });

    $(document).on('click', '.inline-popup-close', function (e) {
        e.preventDefault();
        $.magnificPopup.close();
    });


    if (navigator.userAgent.match(/Trident\/7\./)) {
        $('body').on("mousewheel", function () {
            event.preventDefault();
            var wd = event.wheelDelta;
            var csp = window.pageYOffset;
            window.scrollTo(0, csp - wd);
        });
    }



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

$(window).on('load', function () { // makes sure the whole site is loaded
    "use strict";
    /*
    =======================================================
        // Preloader
    ======================================================
    */
    $('.preloader').delay(400).fadeOut('slow');


    /*=======================================================
        // My Skills
    ======================================================*/

    $('[data-toggle="tooltip"]').tooltip({
        trigger: 'manual'
    }).tooltip('show');

    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 10) { // scroll down abit and get the action
            var progressBar = $(".progress-bar");
            progressBar.each(function () {
                var each_bar_width = $(this).attr('aria-valuenow');
                $(this).width(each_bar_width + '%');
            });

        }
    });


    /*=======================================================
        // Counter Up Initialization
    ======================================================*/
    $('.counting').counterUp({
        delay: 5,
        time: 1000
    });


    /*=======================================================
        // App Screen Slider Initialization
    ======================================================*/
    $('#for-service').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        asNavFor: '#service-nav'
    });

    $('#service-nav').slick({
        centerMode: true,
        dots: true,
        arrows: true,
        centerPadding: '60px',
        slidesToShow: 3,
        asNavFor: '#for-service',
        focusOnSelect: true,
        responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });


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
