const cardsBlock = document.querySelector('.repair-cards'),
    showBtn = document.querySelector('#repairShowBtn'),
    allLinks = cardsBlock.querySelectorAll('a');

//variables for animation the card-block
const elemWidth = allLinks[0].clientWidth, // 260,
    elemHeight = allLinks[0].clientHeight + 20, // 90,
    parentHeight = cardsBlock.clientHeight;

//flag for animation card-block
//used to dicplay state
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

