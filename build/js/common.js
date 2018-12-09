$(document).ready(function () {

    // sub menu open
    $('.js-sub').hover(function () {
        $(this).children().stop().slideDown(500);
    },
        function () {
                $(this).children().stop().slideUp(500);
        });


});