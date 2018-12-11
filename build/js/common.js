$(document).ready(function () {
    // tabs
    $(".solution__content").not(":first").hide();

    $(".js-tabs .js-tab").click(function() {
        $(".js-tabs .js-tab").removeClass("open").eq($(this).index()).addClass("open");
        $(".solution__content").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("show");


    //about toggle
    $('.js-about').click(function () {
        var tgl = $('.js-tgl');
        $('.js-hide').slideToggle(800);
        tgl.toggleClass('spin');

        if(tgl.hasClass('spin')) {
            tgl.css({
                'transform': 'rotate(90deg)',
                'transition': '.8s ease'
            });
        } else {
            tgl.css({
                'transform': 'rotate(0)',
                'transition': '.8s ease'
            });
            setTimeout(function () {
                tgl.removeAttr('style');
            },800);

        }
    });

    // sub menu open
    $('.js-sub').hover(function () {
        $(this).children().stop().slideDown(500);
    },
        function () {
                $(this).children().stop().slideUp(500);
        });

    //slick slider
    $('.js-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        nextArrow: '<span class="prev"></span>',
        prevArrow: '<span class="next"></span>',
        dots: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });


});