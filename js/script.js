// $('.rewiew__slider').slick({
//     dots: true,
//     infinite: true,
//     speed: 300,
//     slidesToShow: 1,
//     arrows: false,
//     centerMode: true, 
//     // centerPadding: '150px'
//     mobileFirst: true,
//     variableWidth: true
// });

const header = document.querySelector('.header');

document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');

const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger__active');
        menu.classList.toggle('menu__active');
        if (menu.classList.contains('menu__active')) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = '';
        }
    });


    const reviews_swiper = new Swiper('.js-reviews-swiper', {
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },
        slidesPerView: 3,
        navigation: {
            nextEl: '.js-review-next',
            prevEl: '.js-review-prev',
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 1,
                spaceBetween: 30
            },
            // when window width is >= 640px
            640: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            993: {
                slidesPerView: 3,
                spaceBetween: 0
            }
        }
    });

});

window.onscroll = function () {
    if (window.pageYOffset > 0) {
        header.classList.add('header__active');
    } else {
        header.classList.remove('header__active');
    }
};

// window.addEventListener('scroll', () => {
//     console.log(window.pageYOffset);
// });

// function disableScroll() {
//     let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

//         window.onscroll = function() {
//             window.scrollTo(0, scrollTop);
//         };
// }
// disableScroll();