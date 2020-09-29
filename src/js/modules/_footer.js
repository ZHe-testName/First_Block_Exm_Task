const footerBlocks = document.querySelectorAll('.footer-block__link');

if (document.documentElement.clientWidth > 768){
    footerBlocks[0].classList.add('left-txt-orient');
    footerBlocks[footerBlocks.length - 1].classList.add('right-txt-orient');
}