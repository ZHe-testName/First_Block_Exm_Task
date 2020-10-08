const feedbackModal = document.getElementById('feedback'),
    closeButtons = feedbackModal.parentElement.querySelectorAll('.basic-button--close-bg');

feedbackModal.parentElement.addEventListener('click', (event) => {
    const target = event.target;

    if (target.classList.contains('modal-wrap') || target.classList.contains('basic-button--close-bg') ||
    target.classList.contains('basic-button--close-bg__first-stick') || 
    target.classList.contains('basic-button--close-bg__second-stick')){
        
        feedbackModal.classList.remove('modal--visible-mod');

        closeButtons.forEach(btn => {
            btn.firstElementChild.classList.remove('animate-first');
            btn.lastElementChild.classList.remove('animate-second');
        })

        setTimeout(() => {
            feedbackModal.parentElement.style.visibility = 'hidden';
        }, 400);   
    }
});