$(document).ready( () => {

    new Swiper('.restaurants__slider', {
        navigation: {
            nextEl: '.restaurants__subtl-next',
            prevEl: '.restaurants__subtl-prev'
        },
        slidesPerView: 1,
        spaceBetween: 24,
        loop: true,
        breakpoints: {
            1024: {
                slidesPerView: 4,
            },
            720: {
                slidesPerView: 3,
            },
            480: {
                slidesPerView: 2,
            }
        },
    })

    new Swiper('.specialities__slider', {
        navigation: {
            nextEl: '.subtl__next',
            prevEl: '.subtl__prev',
        },
        autoplay: {
            delay: 3000,
        },
        slidesPerView: 2,
        spaceBetween: 24,
        loop: true,
        speed: 500,
        breakpoints: {
            1200: {
                slidesPerView: 8,
            },
            1024: {
                slidesPerView: 7,
            },
            768: {
                slidesPerView: 5,
            },
            625: {
                slidesPerView: 4,
            },
            480: {
                slidesPerView: 3,
            },
        }
    })

    const header = $('.header')
    var lastScrollTop = 0, delta = 15;
    $(window).scroll(function(event){
        var st = $(this).scrollTop();
        if(Math.abs(lastScrollTop - st) <= delta)
            return;
        if ((st > lastScrollTop) && (lastScrollTop>0)) {
            // downscroll code
            header.addClass("hide")
            $('.fixed').removeClass('fixed-active')
            $('.container').removeClass('container-active')
            $('.header-exit').removeClass('header-exit_active')
            $('.header__elements').removeClass('header__elements_active')
        } else {
            // upscroll code
            header.removeClass("hide")
        }
        lastScrollTop = st;
    });

    $('.header__burger').on('click', () => {
        $('.fixed').toggleClass('fixed-active')
        $('.container').toggleClass('container-active')
        setTimeout(() => {
            $('.header-exit').toggleClass('header-exit_active')
            $('.header__elements').toggleClass('header__elements_active')
        }, 150)
        $('.header__burger').toggleClass('header__burger-active')
    })

    let scrolled = false
    let top = $('.numbers').offset().top - ($(window).height() - ($('.numbers').height() / 2))
    if ($(this).scrollTop() >= top) {
        $( ".numbers-change" ).each(function( index ) {
            $(this).text($(this).data('limit'))
        })
        scrolled = true
    }
        $(document).on('scroll', () => {
            if (!scrolled) {
                if ($(this).scrollTop() >= top) {
                    $( ".numbers-change" ).each(function( index ) {
                        const end = +($(this).data('limit'))
                        $(this).text('0')
                        let start = 0
                        let interval = setInterval(() => {
                            start = start + 1
                            $(this).text(start)
                            if (start === end) {
                                clearInterval(interval)
                            }
                        }, 50)
                    })
                    scrolled = true
                }
            }
        })
})
