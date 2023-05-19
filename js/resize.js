const servicesBlock = document.querySelector('.services'),
      cardsBlock = servicesBlock.querySelector('.services__cards-block'),
      cards = cardsBlock.querySelectorAll('.card'),
      cardsTitle = servicesBlock.querySelector('.services__text-block');

const employeesBlock = document.querySelector('.employees'),
      employeesTitle = employeesBlock.querySelector('.employees__title'),
      employeesCardsBlock = employeesBlock.querySelector('.employees__cards'),
      employeesCards = employeesCardsBlock.querySelectorAll('.employees__card');

let sliderButton = '';

screenWidth = document.body.clientWidth;
if (screenWidth <= 1023) {
    cards.forEach(item => {
        item.classList.add('glide__slide');
    });

    for (let i = 0; i < cards.length; i++) {
        sliderButton += `<button class="slider__button" data-glide-dir="=${i}"></button>`;
    }

    servicesBlock.innerHTML = `
        ${cardsTitle.outerHTML}
        <div class="slider services-slider">
            <div class="slider__list" data-glide-el="track">
                <div class="slider__track">
                    ${cardsBlock.innerHTML}
                </div>
            </div>
            <div class="slider__buttons" data-glide-el="controls[nav]">
                ${sliderButton}
            </div>
        </div>
    `;

    sliderButton = ''

    employeesCards.forEach(item => {
        item.classList.add('glide__slide');
    });

    for (let i = 0; i < employeesCards.length; i++) {
        sliderButton += `<button class="slider__button" data-glide-dir="=${i}"></button>`;
    }

    employeesBlock.innerHTML = `
        ${employeesTitle.outerHTML}
        <div class="slider employees-slider">
            <div class="slider__list" data-glide-el="track">
                <div class="slider__track">
                    ${employeesCardsBlock.innerHTML}
                </div>
            </div>
            <div class="slider__buttons" data-glide-el="controls[nav]">
                ${sliderButton}
            </div>
        </div>
    `;
}

const servicesSlider = new Glide('.services-slider', {
    type: 'carousel',
    startAt: 0,
    perView: 2,
    gap: 20
});

const employeesSlider = new Glide('.employees-slider', {
    type: 'carousel',
    startAt: 0,
    perView: 3,
    gap: 20
});

servicesSlider.mount();
employeesSlider.mount();


// window.addEventListener('resize', () => {
//     screenWidth = document.body.clientWidth;
//     if (screenWidth <= 1023) {
//         servicesBlock.innerHTML = `
//             ${cardsTitle.outerHTML}
//             <div class="services__slider slider">
//                 <div class="slider__list">
//                     <div class="slider__track">
//                         ${cardsBlock.innerHTML}
//                     </div>
//                 </div>
//                 <div class="slider__buttons">
//                     ${sliderButton}
//                 </div>
//             </div>
//         `;
//     } else {
//         servicesBlock.innerHTML = cardsTitle.outerHTML + cardsBlock.outerHTML;
//     }
// });
