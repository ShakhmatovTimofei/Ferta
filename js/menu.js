const burgerButton = document.querySelector('.header__burger-button'),
      headerRow = document.querySelector('.header__row'),
      navMenu = document.querySelector('.header__nav'),
      headerButton = document.querySelector('.header__button'),
      contactBlock = document.querySelector('.header__contact-block'),
      container = document.querySelector('.container');

const screenWidth = document.body.clientWidth;

document.addEventListener('DOMContentLoaded', () => {
    if (screenWidth <= 1023) {
        navMenu.classList.add('hidden');
        headerButton.classList.add('hidden');
        navMenu.classList.add('visually-hidden');
        headerButton.classList.add('visually-hidden');
    }
});

burgerButton.addEventListener('click', () => {
    burgerButton.classList.toggle('active');
    headerRow.classList.toggle('menu-active');
    contactBlock.classList.toggle('menu-active');
    container.classList.toggle('hidden');

    if (navMenu.classList.contains('hidden')) {
        navMenu.classList.remove('hidden');
        headerButton.classList.remove('hidden');
        setTimeout(function() {
            navMenu.classList.remove('visually-hidden');
            headerButton.classList.remove('visually-hidden');
        }, 20);
    } else {
        navMenu.classList.add('visually-hidden');
        headerButton.classList.add('visually-hidden');
        setTimeout(function() {
            navMenu.classList.add('hidden');
            headerButton.classList.add('hidden');
        }, 20);
    }
});