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


    const reviewsSwiper = new Swiper('.js-reviews-swiper', {
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
    window.onscroll = function () {
        if (window.pageYOffset > 0) {
            header.classList.add('header__active');
        } else {
            header.classList.remove('header__active');
        }
    };
    
    const btns = document.querySelectorAll('#callModal');
    const modal = document.querySelector('.modal');
    const closeBtn = document.querySelector('.modal__close');
    const overlay = document.querySelector('.overlay');
    const stopScroll = function() {
        if (modal.classList.contains('modal__active')) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = '';
        }
    };
    const closeModal = function() {
        modal.classList.remove('modal__active');
        overlay.classList.remove('overlay__active');
        stopScroll();
    };
    const openModal = function() {
        overlay.classList.add('overlay__active');
        modal.classList.add('modal__active');
        stopScroll();
    };
    
    btns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            openModal();
        });
    });
    
    closeBtn.addEventListener('click', function() {
        closeModal();
    });
    
    overlay.addEventListener('click', function() {
        closeModal();
        
    });
    
    window.onkeydown = function(event) {
        if (event.keyCode == 27) {
            closeModal();
        }
        if (event.keyCode == 39) {
            reviewsSwiper.nextEl.onclick();
        } 
    };
    

});

const swiper = new Swiper(".mySwiper", {
    loop: false,
    spaceBetween: 10,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 3,
        },
        576: {
            slidesPerView: 5
        },
    }
  });
  const swiper2 = new Swiper(".mySwiper2", {
    loop: false,
    spaceBetween: 100,
    navigation: {
      nextEl: ".js-info-next",
      prevEl: ".js-info-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });

  $(function(){
    $('.minimized').click(function(event) {
      let i_path = $(this).attr('src');
      $('body').append('<div id="overlay"></div><div id="magnify"><img src="'+i_path+'"><div id="close-popup"><i></i></div></div>');
      $('#magnify').css({
       left: ($(document).width() - $('#magnify').outerWidth())/2,
       // top: ($(document).height() - $('#magnify').outerHeight())/2 upd: 24.10.2016
              top: ($(window).height() - $('#magnify').outerHeight())/2
     });
      $('#overlay, #magnify').fadeIn('fast');
    });
    
    $('body').on('click', '#close-popup, #overlay', function(event) {
      event.preventDefault();
  
      $('#overlay, #magnify').fadeOut('fast', function() {
        $('#close-popup, #magnify, #overlay').remove();
      });
    });
  });
