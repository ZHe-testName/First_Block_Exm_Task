const callback = document.getElementById('callback'),
    closeButton = document.getElementById('feedback-close');

callback.parentElement.addEventListener('click', (event) => {
    const target = event.target;

    if (target.classList.contains('modal-wrap') || target.classList.contains('modal') ||
    target.classList.contains('basic-button--close-bg__first-stick') || 
    target.classList.contains('basic-button--close-bg__second-stick')){
        callback.classList.remove('modal--visible-mod');

        closeButton.firstElementChild.classList.remove('animate-first');
        closeButton.lastElementChild.classList.remove('animate-second');

        setTimeout(() => {
            callback.parentElement.style.visibility = 'hidden';
        }, 400);   
    }
});