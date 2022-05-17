$(document).ready(function () {



    const swiper = new Swiper('.best-comment-swiper', {
        slidesPerView: 1,
        spaceBetween: 16,
        loop: true,
        autoplay: {
            delay: 9000,
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: 'true'
        },
        breakpoints: {
            425: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            767: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 3,
            }
        }
    });

    $(window).on('load resize scroll', function () {
        const window_top = $(this).scrollTop();

        if (window_top > 60 && !$('body').hasClass('leavetop')) {
            $('body').addClass('leavetop');
        }

        if (window_top < 60 && $('body').hasClass('leavetop')) {
            $('body').removeClass('leavetop');
        }
    });

    $('.gotop').on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });

});