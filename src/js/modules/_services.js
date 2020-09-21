const servicesParText = document.querySelector('.services__par-text'),
    servicesReadmoreButton = document.querySelector('.services__readmore-button');

servicesReadmoreButton.addEventListener('click', () => {
    servicesParText.classList.toggle('services__par-text--opened');
});

