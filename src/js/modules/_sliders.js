// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from 'swiper';

// configure Swiper to use modules
Swiper.use([Navigation, Pagination]);

//Function for incertion slider clasess into the elements
const addSliderClasses = (className, withoutLastSlide = false) => {
    const wrap = document.querySelector(className);
    
    let countVal = 0;

    wrap.parentElement.classList.add('swiper-container');
    wrap.classList.add('swiper-wrapper');

    if (withoutLastSlide){
        countVal++;
    }

    for(let i = 0; i < wrap.children.length - countVal; i++){
        wrap.children[i].classList.add('swiper-slide');
    }   
}

if (document.documentElement.clientWidth < 564){
    addSliderClasses('.repair-cards', true);

    //swiper init
    const swiperRepair = new Swiper('.repair-main', {
        loop: false,
        slidesPerView: 1.2,
        freeMode: true,
        spaceBetween: 10,
    
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets'
        },

        breakpoints: {
            440: {
                slidesPerView: 1.4
            }
        }
    });

    addSliderClasses('.tech-cards', true);

    const swiperTech = new Swiper('.tech-main', {
        loop: false,
        slidesPerView: 1.2,
        freeMode: true,
        spaceBetween: 10,
    
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets'
        },

        breakpoints: {
            440: {
                slidesPerView: 1.4
            }
        }
    });

}

if (document.documentElement.clientWidth < 768){
    addSliderClasses('.price-cards');
    
    const swiperPrice = new Swiper('.price-main', {
        loop: false,
        slidesPerView: 1,
        freeMode: true,
        spaceBetween: 10,
    
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets'
        },

        breakpoints: {
            380: {
                slidesPerView: 1.2
            },
            440: {
                slidesPerView: 1.4
            },
            590: {
                slidesPerView: 1.7
            }
        }
    });
}

if (document.documentElement.clientWidth <= 1120){
    addSliderClasses('.services-slider');

    const menuNavigationSlider = new Swiper('.menu-navigation', {
        loop: false,
        slidesPerView: 1.1,
        freeMode: true,
        spaceBetween: 10,

        pagination: {
            el: '.swiper-pagination',
            type: 'bullets'
        },

        breakpoints: {
            360: {
                slidesPerView: 1.3
            },
            520: {
                slidesPerView: 1.7
            },
            610: {
                slidesPerView: 2.1
            },
            720: {
                slidesPerView: 2.6
            },
            // 800: {
            //     slidesPerView: 3.3
            // },
            1000: {
                slidesPerView: 3.5
            }
        }
    });
}
