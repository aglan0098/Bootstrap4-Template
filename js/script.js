$(function () {
    $('.nav-button').click(function () {
        $(this).toggleClass('change');
    });

    //navbar
    $(window).scroll(function () {
        let position = $(this).scrollTop();
        if (position >= 200) {
            $('.nav-menu').addClass('custom-navbar');
        } else {
            $('.nav-menu').removeClass('custom-navbar');
        }
    });

    // navbar Scrolling to sections
    $('li a').click(function () {
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top
        }, 1000);
    });

    //mission animation
    $(window).scroll(function () {
        let position = $(this).scrollTop();
        if (position >= 550) {
            $('.plan-img').addClass('fromLeft');
            $('.mission-text').addClass('fromRight');
        } else {
            $('.plan-img').removeClass('fromLeft');
            $('.mission-text').removeClass('fromRight');
        }
    });

    //gallery
    $('.gallery-list-item').click(function () {
        let value = $(this).attr('data-filter');
        if (value === 'all') {
            $('.filter').show(400);
        } else {
            $('.filter').not('.' + value).hide(300);
            $('.filter').filter('.' + value).show(300);
        }
    });

    $('.gallery-list-item').click(function () {
        $(this).addClass('active-item').siblings().removeClass('active-item');
    });

    //priciling animation
    $(window).scroll(function () {
        let position = $(this).scrollTop();
        if (position >= 5000) {
            $('.card-1').addClass('moveFromleft');
            $('.card-2').addClass('moveFromBottom');
            $('.card-3').addClass('moveFromRight');
        } else {
            $('.card-1').removeClass('moveFromleft');
            $('.card-2').removeClass('moveFromBottom');
            $('.card-3').removeClass('moveFromRight');
        }
    })
    // end of priciling



});