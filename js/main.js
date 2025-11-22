(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true,
    });

    
    // Counter Animation
    function animateCounter(element) {
        var $this = $(element);
        var target = parseInt($this.data('target'));
        var suffix = $this.data('suffix') || '';
        var duration = 2000; // 2 seconds
        var increment = target / (duration / 16); // 60fps
        var current = 0;
        
        var timer = setInterval(function() {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            $this.text(Math.floor(current) + suffix);
        }, 16);
    }
    
    // Check if element is in viewport
    function isInViewport(element) {
        var elementTop = $(element).offset().top;
        var elementBottom = elementTop + $(element).outerHeight();
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();
        return elementBottom > viewportTop && elementTop < viewportBottom;
    }
    
    // Initialize counters when in viewport
    var countersAnimated = false;
    function checkCounters() {
        if (!countersAnimated && $('.counter-number').length > 0) {
            var $firstCounter = $('.counter-number').first();
            if (isInViewport($firstCounter)) {
                countersAnimated = true;
                $('.counter-number').each(function() {
                    animateCounter($(this));
                });
            }
        }
    }
    
    // Check on scroll and on load
    $(window).on('scroll', checkCounters);
    $(document).ready(function() {
        checkCounters();
    });

    
})(jQuery);

