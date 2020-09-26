// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from 'swiper';

// configure Swiper to use modules
Swiper.use([Navigation, Pagination]);

if (document.documentElement.clientWidth <= 1226){
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

