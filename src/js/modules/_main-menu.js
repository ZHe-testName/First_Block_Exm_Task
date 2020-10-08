import {showHideHandler} from '../_hendlers';

const mainMenu = document.querySelector('.main-menu'),
    closeButton = mainMenu.querySelector('.basic-button--close-bg'),
    feedbackBlock = document.getElementById('feedback'),
    callbackBlock = document.getElementById('callback'),
    feedbackCloseButton = document.getElementById('feedback-close'),
    callbackCloseButton = document.getElementById('callback-close'),
    links = mainMenu.querySelectorAll('a');

mainMenu.parentElement.addEventListener('click', (event) => {
    let target = event.target;

    if (target.classList.contains('main-menu__link')){   

            links.forEach(item => {
                if (item.classList.contains('main-menu__link--active')){
                    item.classList.remove('main-menu__link--active');
                }
    
                if (target === item){
                    item.classList.add('main-menu__link--active');
                }
            }
    
        )
    }

    if (target.classList.contains('basic-button--chat-bg')){
        showHideHandler(feedbackBlock, feedbackCloseButton);

        //Immit the event on closing button
        //for shut menu window
        if (document.documentElement.clientWidth < 1440){
            let event = new Event('click');
            closeButton.dispatchEvent(event);
        }
    }

    if (target.classList.contains('basic-button--call-bg')){
        showHideHandler(callbackBlock, callbackCloseButton);

        if (document.documentElement.clientWidth < 1440){
            let event = new Event('click');
            closeButton.dispatchEvent(event);
        }
    }

    if (target.classList.contains('menu-wrap')){
        showHideHandler(mainMenu, closeButton, true);
    }
});

closeButton.addEventListener('click', () => {  
    showHideHandler(mainMenu, closeButton, true);
})

