const servicesBlock = document.querySelector('.services'),
      cardsBlock = servicesBlock.querySelector('.services__cards-block'),
      cards = cardsBlock.querySelectorAll('.card'),
      cardsTitle = servicesBlock.querySelector('.services__text-block');

const employeesBlock = document.querySelector('.employees'),
      employeesTitle = employeesBlock.querySelector('.employees__title'),
      employeesCardsBlock = employeesBlock.querySelector('.employees__cards'),
      employeesCards = employeesCardsBlock.querySelectorAll('.employees__card');

const reasonsBlock = document.querySelector('.reasons'),
      reasonsTitle = reasonsBlock.querySelector('.reasons__title'),
      reasonsCardsBlock = reasonsBlock.querySelector('.reasons__reason-container');

let sliderButton = '';
const url = 'js/glide.js';

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

    sliderButton = ''

    reasonsCards.forEach(item => {
        item.classList.add('glide__slide');
    });

    for (let i = 0; i < reasonsCards.length; i++) {
        sliderButton += `<button class="slider__button" data-glide-dir="=${i}"></button>`;
    }

    reasonsBlock.innerHTML = `
        ${reasonsTitle.outerHTML}
        <div class="slider reasons-slider">
            <div class="slider__list" data-glide-el="track">
                <div class="slider__track">
                    ${reasonsCardsBlock.innerHTML}
                </div>
            </div>
            <div class="slider__buttons" data-glide-el="controls[nav]">
                ${sliderButton}
            </div>
        </div>
    `;

    const servicesSlider = new Glide('.services-slider', {
        type: 'carousel',
        startAt: 0,
        perView: 2,
        gap: 20
    });
    
    const employeesSlider = new Glide('.employees-slider', {
        type: 'carousel',
        startAt: 0,
        perView: 2,
        gap: 20
    });
    
    const reasonsSlider = new Glide('.reasons-slider', {
        type: 'carousel',
        startAt: 0,
        perView: 2,
        gap: 20
    });
    
    servicesSlider.mount();
    employeesSlider.mount();
    reasonsSlider.mount();

    // const ServicesSlider = document.querySelector('.services-slider');
    const servicesSliderTrack = document.querySelector('.slider__track');
    // const cardImg = document.querySelectorAll('.card__img');

    // const servicesGradient = {
    //     startFirstColor: '#4F1C60',
    //     startSecondColor: '#8E1C6E',
    //     endFirstColor: '#321C60',
    //     endSecondColor: '#540D8C',
    //     duration: 10000,
    //     isLinearGradient: true,
    //     isThreeColors: true,
    //     degrees: '289.71deg',
    //     additionalColor: '#2F1C4D',
    //     firstColorPercent: '12.8%',
    //     secondColorPercent: '58.94%',
    //     thirdColorPercent: '97.99%'
    // }

    // let servicesGradientAnimation;

    // servicesSliderTrack.addEventListener('mouseover', (e) => {
    //     if (e.target.classList.contains('services__card')) {
    //         servicesGradientAnimation = new gradientAnimation(e.target, servicesGradient);
    //         servicesGradientAnimation.startAnimation();
    //         cardImg[0].classList.add('active');

    //     } 
    // });

    // servicesSliderTrack.addEventListener('mouseout', (e) => {
    //     servicesGradientAnimation.stopAnimation();
    //     cardImg[0].classList.add('active');
    // });
}

