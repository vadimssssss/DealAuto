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

const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      header = document.querySelector('.header');
let scrollTop = window.pageYOffset;

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger__active');
    menu.classList.toggle('menu__active');
    header.classList.toggle('header__fixed');
    if (hamburger.classList.contains('.humburger__active')) {
        const disableScroll = function() {
            hamburger.addEventListener ('click', () => {
                removeEventListener('scroll', window);
            });
        };
    } else {
        window.addEventListener('scroll', () => {
            window.scrollTo(0, scrollTop);
        });
    }
});


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