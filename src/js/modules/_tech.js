const showBtn = document.querySelector('#techShowBtn'),
    techCards = document.querySelector('.tech-cards'),
    allLinks = techCards.querySelectorAll('a'),

    elemWidth = 255,
    elemHeight = 230;

let flag = true;

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
            elemsInRow = Math.floor(((screenWidth) / elemWidth));
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