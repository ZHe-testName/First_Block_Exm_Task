const header = document.querySelector('.header'),
    mainMenu = document.querySelector('.main-menu'),
    closeBtn = mainMenu.querySelector('.basic-button--close-bg'),
    headersButtons = header.querySelectorAll('button');

header.addEventListener('click', (event) => {
    let target = event.target;

    if (target.classList.contains('basic-button--burger-bg')){
        mainMenu.classList.add('main-menu--visible-mod');

        closeBtn.classList.add('animate-after')
    }
})