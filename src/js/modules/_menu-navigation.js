// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from 'swiper';

// configure Swiper to use modules
Swiper.use([Navigation, Pagination]);

const menuNavigation = document.querySelector('.menu-navigation'),
  servicesSliderItems = menuNavigation.querySelectorAll('.services-slider__item');

menuNavigation.addEventListener('click', (event) => {
  const target = event.target;

  servicesSliderItems.forEach(item => {
    if (item.classList.contains('services-slider__item--active')){
      item.classList.remove('services-slider__item--active');
    }
  })

  if (target.classList.contains('services-slider__item')){
    target.classList.add('services-slider__item--active');
  }else if (target.classList.contains('services-slider__text')) {
    target.closest("div").classList.add('services-slider__item--active');
  }
})

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

