// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from 'swiper';

// configure Swiper to use modules
Swiper.use([Navigation, Pagination]);

const showBtn = document.querySelector('#techShowBtn'),
    techCards = document.querySelector('.tech-cards'),
    allLinks = techCards.querySelectorAll('a'),

    elemWidth = 260,
    elemHeight = 240;

let flag = true;

if (document.documentElement.clientWidth < 564) {
    const swiperTech = new Swiper('.tech-main', {
        loop: false,
        slidesPerView: 1,

        pagination: {
            el: '.swiper-pagination',
            type: 'bullets'
        }
    });
}

showBtn.addEventListener('click', () => {
    showBtn.classList.toggle('services__readmore-button--active');

    if (flag) {
        let screenWidth = document.documentElement.clientWidth;
        let elemsAmount = allLinks.length;
    
        let elemsInRow = 0;
        
        //calculate amount elements in the row relatively to screen width
        if(screenWidth > 1120){
            elemsInRow = 4;
        }else{
            elemsInRow = Math.floor(((screenWidth - 44) / elemWidth));
        }
    
        //insert inline style into cards-block element
        techCards.setAttribute('style', ` height: ${(elemsAmount / elemsInRow) * elemHeight}px;
                                        transition: height;
                                        transition-duration: 0.7s;
                                        transition-timing-function: ease-in;`
        );
        
        showBtn.textContent = 'Скрыть';

        flag = false;
    }else{
        showBtn.textContent = 'Показать все';
        techCards.removeAttribute('style');

        flag = true;
    }

});