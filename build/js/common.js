$(document).ready(function () {
    //mobile menu close
    $('.js-m-close').click(function () {
        navMob.animate({
            left: '-330px'
        },600);
        line.removeClass('animate');
    });


    // humburger
    var line = $('.humb__line'),
        navMob = $('.js-mob');

    $('.humb').on('click', function() {
        line.toggleClass('animate');
        if(line.hasClass('animate')){
            navMob.animate({
                left: 0
            },600);
            navMob.css('box-shadow', '3px 0px 19px 0px rgba(0,0,0,0.75)');
        }else{
            navMob.animate({
                left: '-330px'
            },600);
        }
    });

    //nav slide
    var h_hght = 158;
    var h_mrgn = 0;

    $(window).scroll(function(){
        var top = $(this).scrollTop();

        if(top + h_mrgn > h_hght){
            $('.js-snav').slideDown(500);
        }else{
            $('.js-snav').slideUp(500);
        }
    });

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

    //sub menu mobile
    $('.js-sub_mob').click(function () {
        $(this).children().slideToggle(500);
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

    //ontop
    var top_show = 418;//при каком положении кнопка появляется
    var delay = 700; // Задержка прокрутки
    $(document).ready(function() {
        $(window).scroll(function () {
            if ($(this).scrollTop() > top_show) $('#ontop').fadeIn();
            else $('#ontop').fadeOut();
        });
        $('#ontop').click(function () {
            $('body, html').animate({
                scrollTop: 0
            }, delay);
        });
    });


});