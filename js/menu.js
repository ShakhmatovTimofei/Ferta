const burgerButton = document.querySelector('.header__burger-button'),
      headerRow = document.querySelector('.header__row'),
      navMenu = document.querySelector('.header__nav'),
      headerButton = document.querySelector('.header__button'),
      contactBlock = document.querySelector('.header__contact-block'),
      container = document.querySelector('.container'),
      headerContent = document.querySelector('.header__content');

let screenWidth = document.body.clientWidth;

document.addEventListener('DOMContentLoaded', () => {
    if (screenWidth <= 1023) {
        navMenu.classList.add('hidden');
        headerButton.classList.add('hidden');
        navMenu.classList.add('visually-hidden');
        headerButton.classList.add('visually-hidden');
    }
});

// window.addEventListener('resize', () => {
//     screenWidth = document.body.clientWidth;
//     if (screenWidth <= 1023) {
//         navMenu.classList.add('hidden');
//         headerButton.classList.add('hidden');
//         navMenu.classList.add('visually-hidden');
//         headerButton.classList.add('visually-hidden');
//     } else if (navMenu.classList.contains('hidden')) {
//         navMenu.classList.remove('hidden');
//         headerButton.classList.remove('hidden');
//         navMenu.classList.remove('visually-hidden');
//         headerButton.classList.remove('visually-hidden');
//     }
// });

burgerButton.addEventListener('click', () => {
    burgerButton.classList.toggle('active');
    headerContent.classList.toggle('menu-active');
    
    if (headerRow.classList.contains('menu-active')) {
        headerRow.classList.add('visually-hidden');
        setTimeout(function() {
            headerRow.classList.remove('menu-active');
            headerRow.classList.remove('visually-hidden');
            container.classList.remove('hidden');
            contactBlock.classList.remove('menu-active');
        }, 500);
    } else {
        container.classList.add('hidden');
        contactBlock.classList.add('menu-active');
        headerRow.classList.remove('visually-hidden');
        setTimeout(function() {
            headerRow.classList.add('menu-active');
        });
    }

    if (navMenu.classList.contains('hidden')) {
        navMenu.classList.remove('hidden');
        headerButton.classList.remove('hidden');
        setTimeout(function() {
            navMenu.classList.remove('visually-hidden');
            headerButton.classList.remove('visually-hidden');
        }, 10);
    } else {
        navMenu.classList.add('visually-hidden');
        headerButton.classList.add('visually-hidden');
        setTimeout(function() {
            navMenu.classList.add('hidden');
            headerButton.classList.add('hidden');
        }, 500);
    }
});