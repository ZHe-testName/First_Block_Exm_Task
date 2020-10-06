const mainMenu = document.querySelector('.main-menu'),
    closeButton = mainMenu.querySelector('.basic-button--close-bg'),
    feedbackBlock = document.getElementById('feedback'),
    callbackBlock = document.getElementById('callback'),
    feedbackCloseButton = document.getElementById('feedback-close'),
    callbackCloseButton = document.getElementById('callback-close'),
    links = mainMenu.querySelectorAll('a');

mainMenu.addEventListener('click', (event) => {
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
        feedbackBlock.parentElement.style.visibility = 'visible';

        feedbackBlock.classList.add('modal--visible-mod');

        feedbackCloseButton.firstElementChild.classList.add('animate-first');
        feedbackCloseButton.lastElementChild.classList.add('animate-second');

        //Immit the event on closing button
        //for shut menu window
        if (document.documentElement.clientWidth < 1440){
            let event = new Event('click');
            closeButton.dispatchEvent(event);
        }
    }

    if (target.classList.contains('basic-button--call-bg')){
        callbackBlock.parentElement.style.visibility = 'visible';

        callbackBlock.classList.add('modal--visible-mod');

        callbackCloseButton.firstElementChild.classList.add('animate-first');
        callbackCloseButton.lastElementChild.classList.add('animate-second');

        if (document.documentElement.clientWidth < 1440){
            let event = new Event('click');
            closeButton.dispatchEvent(event);
        }
    }
});

closeButton.addEventListener('click', () => {
    
    mainMenu.classList.remove('main-menu--visible-mod');

    closeButton.firstElementChild.classList.remove('animate-first');
    closeButton.lastElementChild.classList.remove('animate-second');

    setTimeout(() => {
        mainMenu.parentElement.style.visibility = 'hidden';
    }, 400);      
})

