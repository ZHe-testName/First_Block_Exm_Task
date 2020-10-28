export function showHideHandler(block, closeButton, remove = false){
    let body = document.querySelector('body');

    if (remove){
        block.classList.remove('visible-mode');

        closeButton.firstElementChild.classList.remove('animate-first');
        closeButton.lastElementChild.classList.remove('animate-second');
    
        setTimeout(() => {
            block.parentElement.style.visibility = 'hidden';
        }, 400);

        body.removeAttribute('style');

        return;
    }

    block.parentElement.style.visibility = 'visible';

    block.classList.add('visible-mode');

    body.style.overflowY = 'hidden';

    closeButton.firstElementChild.classList.add('animate-first');
    closeButton.lastElementChild.classList.add('animate-second');
}