const servicesParText = document.querySelector('.services__par-text'),
    servicesTextWrap = document.querySelector('.services__text-wrap'),
    servicesReadmoreButton = document.querySelector('.services__readmore-button'),
    showBtn = document.querySelector('.services__readmore-button');

let flag = true;

servicesReadmoreButton.addEventListener('click', () => {
    showBtn.classList.toggle('services__readmore-button--active');

    if(flag){
        //insert inline style into screan element for smooth animation
        servicesTextWrap.setAttribute('style', ` height: ${servicesParText.clientHeight}px;
                                        transition: height;
                                        transition-duration: 0.6s;
                                        transition-timing-function: ease-in;`
        );

        showBtn.textContent = 'Скрыть';
        flag = false;

        return;
    }

    servicesTextWrap.removeAttribute('style');

    showBtn.textContent = 'Показать все';

    flag = true;   
});

