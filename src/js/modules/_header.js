const header = document.getElementById('header'),
    mainMenu = document.querySelector('.main-menu'),
    closeBtn = mainMenu.querySelector('.basic-button--close-bg'),

    feedbackBlock = document.querySelector('#feedback'),
    feedbackCloseButton = feedbackBlock.querySelector('#feedback-close'),

    callbackBlock = document.querySelector('#callback'),
    callbackCloseButton = callbackBlock.querySelector('#callback-close');

header.addEventListener('click', (event) => {
    let target = event.target;
    
    if (target.classList.contains('basic-button--burger-bg')){
        mainMenu.parentElement.style.visibility = 'visible';
        mainMenu.classList.add('main-menu--visible-mod');

        closeBtn.firstElementChild.classList.add('animate-first');
        closeBtn.lastElementChild.classList.add('animate-second');
    }

    if (target.classList.contains('basic-button--chat-bg')){
        feedbackBlock.parentElement.style.visibility = 'visible';

        feedbackBlock.classList.add('modal--visible-mod');

        feedbackCloseButton.firstElementChild.classList.add('animate-first');
        feedbackCloseButton.lastElementChild.classList.add('animate-second');
    }

    if (target.classList.contains('basic-button--call-bg')){
        callbackBlock.parentElement.style.visibility = 'visible';

        callbackBlock.classList.add('modal--visible-mod');

        callbackCloseButton.firstElementChild.classList.add('animate-first');
        callbackCloseButton.lastElementChild.classList.add('animate-second');
    }
})