const header = document.querySelector('.header'),
    mainMenu = document.querySelector('.main-menu'),
    closeBtn = mainMenu.querySelector('.basic-button--close-bg'),
    headersButtons = header.querySelectorAll('button'),
    
    animateClasess = [
        'animate-first',
        'animate-second'
    ];

header.addEventListener('click', (event) => {
    let target = event.target;
    
    if (target.classList.contains('basic-button--burger-bg')){
        mainMenu.parentElement.style.visibility = 'visible';
        mainMenu.classList.add('main-menu--visible-mod');

        closeBtn.firstElementChild.classList.add('animate-first');
        closeBtn.lastElementChild.classList.add('animate-second');

    }
})