const slides = document.querySelectorAll('.rewiew__slider-inner-item');
const slidesInner = document.querySelector('.rewiew__slider-inner');
const slidePrev = document.querySelector('.rewiew__slider-prev');
const slideNext = document.querySelector('.rewiew__slider-next');
const sliderWrapper = document.querySelector('.rewiew__slider');
const sliderPag = document.querySelector('.rewiew__slider-pag');
const sliderPagLine = document.querySelector('.rewiew__slider-pag_active');
let slideIndex = 1;
let offset = 0;
let width = window.getComputedStyle(sliderWrapper).width;
let pagWidth = window.getComputedStyle(sliderPag).width; 
let pagOffset = +pagWidth.slice(0, pagWidth.length - 2) / slides.length;  
sliderPagLine.style.width = pagOffset + 'px';
        
    slidesInner.style.width = 100 * slides.length + '%';
    slidesInner.style.display = 'flex';
    slidesInner.style.transition = '0.5s all'
    ;
    slides.forEach(slide => {
        slide.style.width = width;
    });
    sliderWrapper.style.overflow = 'hidden';

slideNext.addEventListener('click', () => {
    if(offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {
        offset = 0;
    } else {
        offset += +width.slice(0, width.length - 2);
    }
    slidesInner.style.transform = `translateX(-${offset}px)`;
    sliderPagLine.style.transform = `translateX(+${pagOffset}px)`;
});

slidePrev.addEventListener('click', () => {
    if(offset == 0) {
        offset = +width.slice(0, width.length - 2) * (slides.length - 1);
    } else {
        offset -= +width.slice(0, width.length - 2);
    }
    if(pagOffset == )
    slidesInner.style.transform = `translateX(-${offset}px)`;
    sliderPagLine.style.transform = `translateX(-${pagOffset}px)`;
});
