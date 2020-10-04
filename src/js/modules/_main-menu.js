const mainMenu = document.querySelector('.main-menu'),
    closeButton = mainMenu.querySelector('.basic-button--close-bg'),
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
});

closeButton.addEventListener('click', () => {
    
    mainMenu.classList.remove('main-menu--visible-mod');

    closeButton.firstElementChild.classList.remove('animate-first');
    closeButton.lastElementChild.classList.remove('animate-second');

    setTimeout(() => {
        mainMenu.parentElement.style.visibility = 'hidden';
    }, 600);      
})

