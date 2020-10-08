import {showHideHandler} from '../_hendlers';

const callback = document.getElementById('callback'),
    closeButton = document.getElementById('callback-close');

callback.parentElement.addEventListener('click', (event) => {
    const target = event.target;

    if (target.classList.contains('modal-wrap') || target.classList.contains('basic-button--close-bg') ||
    target.classList.contains('basic-button--close-bg__first-stick') || 
    target.classList.contains('basic-button--close-bg__second-stick')){
        
        showHideHandler(callback, closeButton, true);
    }
});