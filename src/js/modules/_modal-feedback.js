const feedbackModal = document.getElementById('feedback'),
    closeButton = document.getElementById('feedback-close');

feedbackModal.addEventListener('click', (event) => {
    const target = event.target;

    if (target.classList.contains('basic-button--close-bg')){
        feedbackModal.classList.remove('modal--visible-mod');

        closeButton.firstElementChild.classList.remove('animate-first');
        closeButton.lastElementChild.classList.remove('animate-second');

        setTimeout(() => {
            feedbackModal.parentElement.style.visibility = 'hidden';
        }, 400);   
    }
});