// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from 'swiper';

// configure Swiper to use modules
Swiper.use([Navigation, Pagination]);

const head = document.querySelector('head'),
    cardsBlock = document.querySelector('.repair-cards'),
    showBtn = document.querySelector('#repairShowBtn'),
    allLinks = cardsBlock.querySelectorAll('a');

//variables for animation the card-block
const elemWidth = 260,
    elemHeight = 90,
    parentHeight = 150;

//flag for animation card-block
//used for showing state
let flag = true;

if (document.documentElement.clientWidth < 547) {
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

    const swiperTech = new Swiper('.tech-main', {
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
        cardsBlock.setAttribute('style', ` height: ${(elemsAmount / elemsInRow) * elemHeight}px;
                                        transition: height;
                                        transition-duration: 0.7s;
                                        transition-timing-function: ease-in;`
        );
        
        showBtn.textContent = 'Скрыть';

        flag = false;
    }else{
        showBtn.textContent = 'Показать все';
        cardsBlock.removeAttribute('style');

        flag = true;
    }

});

