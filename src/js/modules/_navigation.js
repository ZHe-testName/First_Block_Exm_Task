const menuNavigation = document.querySelector('.menu-navigation'),
  servicesSliderItems = menuNavigation.querySelectorAll('.services-slider__item');

menuNavigation.addEventListener('click', (event) => {
  const target = event.target; 

  if (target.classList.contains('services-slider__text')){
    servicesSliderItems.forEach(item => {
      if (item.classList.contains('services-slider__item--active')){
        item.classList.remove('services-slider__item--active');
      }

      if (item === target.closest('div')){
        item.classList.add('services-slider__item--active');
      }
    }) 
  }
})



