// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from 'swiper';

// configure Swiper to use modules
Swiper.use([Navigation, Pagination]);


if (document.documentElement.clientWidth < 564) {
    const head = document.querySelector('head');
    
    //create link to slider style-shield
    let styleLink = document.createElement('link');
    styleLink.setAttribute('rel', 'stylesheet');
    styleLink.setAttribute('href', 'https://unpkg.com/swiper/swiper-bundle.css');

    head.appendChild(styleLink);

    //swiper init
    const swiperRepair = new Swiper('.repair-main', {
        loop: false,
        slidesPerView: 1,
    
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets'
        }
    });

    const swiperPrice = new Swiper('.price-main', {
        loop: false,
        slidesPerView: 1,
    
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets'
        }
    });

    const swiperTech = new Swiper('.tech-main', {
        loop: false,
        slidesPerView: 1,

        pagination: {
            el: '.swiper-pagination',
            type: 'bullets'
        }
    });

}

if (document.documentElement.clientWidth <= 1120){
    const menuNavigationSlider = new Swiper('.menu-navigation', {
        loop: false,
        freeMode: true,
    
        breakpoints: {
            // when window width is >= 320px
            320: {
              slidesPerView: 1.2
            },
            360: {
              slidesPerView: 1.4
            },
            415: {
              slidesPerView: 1.7
            },
            560: {
                slidesPerView: 2
            },
            700: {
                slidesPerView: 2.2
            },
            780: {
                slidesPerView: 3
            },
            1040: {
                slidesPerView: 4
            }
          }
    
    });
}