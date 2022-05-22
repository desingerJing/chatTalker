$(document).ready(function () {

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

    if ($('.plan-select').length > 0) {
        let nowPlan = 0,
            planScrollLeft = 0;
        function planSelect() {
            $('.plan-select-nav').find('li').removeClass('active').eq(nowPlan).addClass('active');
            $('.plan-select__content').find('.plan-select-item').hide().eq(nowPlan).fadeIn();
        }
        $(document).ready(planSelect);
        $('.plan-select-nav>li').click(function(){
            nowPlan = $('.plan-select-nav>li').index(this);
            $(this).each(planSelect);
            planScrollLeft = $('.plan-select-nav>li').eq(nowPlan).position();
            $('.plan-select-nav__content').animate({scrollLeft:planScrollLeft.left});
        });
    }

    if ($('.faq').length > 0) {
        let nowFaq = 0;
        function viewFAQ() {
            $('.faq-content').find('.faq-item').removeClass('active').eq(nowFaq).addClass('active');
        }
        $(document).ready(viewFAQ);
        $('.faq-content>.faq-item').click(function () {
            nowFaq = $('.faq-content>.faq-item').index(this);
            $(this).each(viewFAQ);
        });
    }

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

});