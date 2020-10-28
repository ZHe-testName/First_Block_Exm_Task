import {showHideHandler} from '../_hendlers';

const callback = document.getElementById('callback'),
    closeButton = document.getElementById('callback-close');

callback.parentElement.addEventListener('click', (event) => {
    const target = event.target;

    if (target.dataset.close === 'close'){
        showHideHandler(callback, closeButton, true);
    }
});