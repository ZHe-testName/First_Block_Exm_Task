import {showHideHandler} from '../_hendlers';

const feedbackModal = document.getElementById('feedback'),
    closeButton = feedbackModal.querySelector('.basic-button--close-bg');

feedbackModal.parentElement.addEventListener('click', (event) => {
    const target = event.target;

    if (target.classList.contains('modal-wrap') || target.classList.contains('basic-button--close-bg') ||
    target.classList.contains('basic-button--close-bg__first-stick') || 
    target.classList.contains('basic-button--close-bg__second-stick')){
        
        showHideHandler(feedbackModal, closeButton, true);
    }
});