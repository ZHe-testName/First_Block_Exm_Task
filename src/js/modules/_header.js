import {showHideHandler} from '../_hendlers';

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
        showHideHandler(mainMenu, closeBtn);
    }

    if (target.classList.contains('basic-button--chat-bg')){
        showHideHandler(feedbackBlock, feedbackCloseButton);
    }

    if (target.classList.contains('basic-button--call-bg')){
        showHideHandler(callbackBlock, callbackCloseButton);
    }
})