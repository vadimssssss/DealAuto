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

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger__active');
    menu.classList.toggle('menu__active');
    header.classList.toggle('header__fixed');
});