
const heroSwiper = new Swiper('.heroSwiper', {
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    effect: 'slide',
    speed: 1000,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    on: {
        init: function() {

            const slides = document.querySelectorAll('.heroSwiper .swiper-slide-active h1, .heroSwiper .swiper-slide-active p, .heroSwiper .swiper-slide-active button');
            slides.forEach((slide, index) => {
                slide.style.animation = `fadeInUp 0.8s ease-out ${index * 0.2}s forwards`;
            });
        },
        slideChangeTransitionEnd: function() {

            const slides = document.querySelectorAll('.heroSwiper .swiper-slide-active h1, .heroSwiper .swiper-slide-active p, .heroSwiper .swiper-slide-active button');
            slides.forEach((slide) => {
                slide.style.animation = 'none';
                slide.offsetHeight;
                slide.style.animation = null;
            });
        }
    }
});


const testimonialSwiper = new Swiper('.testimonialSwiper', {
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
    effect: 'slide',
    speed: 800,
});


const heroContainer = document.querySelector('.heroSwiper');
if (heroContainer) {
    heroContainer.addEventListener('mouseenter', () => {
        heroSwiper.autoplay.stop();
    });
    
    heroContainer.addEventListener('mouseleave', () => {
        heroSwiper.autoplay.start();
    });
}

const testimonialContainer = document.querySelector('.testimonialSwiper');
if (testimonialContainer) {
    testimonialContainer.addEventListener('mouseenter', () => {
        testimonialSwiper.autoplay.stop();
    });
    
    testimonialContainer.addEventListener('mouseleave', () => {
        testimonialSwiper.autoplay.start();
    });
}