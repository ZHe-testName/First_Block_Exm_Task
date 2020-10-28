import {showHideHandler} from '../_hendlers';

const feedbackModal = document.getElementById('feedback'),
    closeButton = feedbackModal.querySelector('.basic-button--close-bg');

feedbackModal.parentElement.addEventListener('click', (event) => {
    const target = event.target;

    if (target.dataset.close === 'close'){
        showHideHandler(feedbackModal, closeButton, true);
    }
});