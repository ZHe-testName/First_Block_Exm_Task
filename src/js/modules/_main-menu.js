const mainMenu = document.querySelector('.main-menu'),
    buttons = mainMenu.querySelectorAll('button'),
    links = mainMenu.querySelectorAll('a');

mainMenu.addEventListener('click', (event) => {
    let target = event.target;

    if (target.classList.contains('main-menu__link')){   

        for (item of links){
            
            if (item.classList.contains('main-menu__link--active')){
                item.classList.remove('main-menu__link--active');
            }

            if (target === item){
                item.classList.add('main-menu__link--active');
            }
        }
    }

    if (target.classList.contains('basic-button')){
        
        for (item of buttons){
            if (target.classList.contains('basic-button--close-bg')){
                
                mainMenu.classList.remove('main-menu--visible-mod');

                target.classList.remove('animate-after');

                setTimeout(() => {
                    mainMenu.parentElement.style.visibility = 'hidden';
                }, 600);
                
            }
        }
    }
})

