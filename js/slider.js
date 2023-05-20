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

    const servicesSliderVar = document.querySelector('.services-slider');
    const servicesCards = servicesSliderVar.querySelectorAll('.card');
    const cardImg = document.querySelectorAll('.card__img');

    const servicesGradient = {
        startFirstColor: '#4F1C60',
        startSecondColor: '#8E1C6E',
        endFirstColor: '#321C60',
        endSecondColor: '#540D8C',
        duration: 10000,
        isLinearGradient: true,
        isThreeColors: true,
        degrees: '289.71deg',
        additionalColor: '#2F1C4D',
        firstColorPercent: '12.8%',
        secondColorPercent: '58.94%',
        thirdColorPercent: '97.99%'
    }

    servicesCards.forEach((card, i) => {
        const servicesGradientAnimation = new gradientAnimation(card, servicesGradient);
        card.addEventListener('mouseover', () => {
            servicesGradientAnimation.startAnimation();
            cardImg[i].classList.add('active');
        });

        card.addEventListener('mouseout', () => {
            servicesGradientAnimation.stopAnimation();
            cardImg[i].classList.remove('active');
            card.style.background = '#26293C';
        });
    });

    const gradientsArr = [ 
        { firstColor: '#592881', secondColor: '#2E1754' }, 
        { firstColor: '#826944', secondColor: '#282261' }, 
        { firstColor: '#78217E', secondColor: '#2C2D4C' },
        { firstColor: '#26645B', secondColor: '#2C2D4C' },
        { firstColor: '#5E229E', secondColor: '#142D45' },
        { firstColor: '#60217E', secondColor: '#260E5A' },
        { firstColor: '#6C09BC', secondColor: '#260857' },
        { firstColor: '#260857', secondColor: '#2C2D4C' },
        { firstColor: '#B200CF', secondColor: '#3E1445' }
    ];

    reasonsCards.forEach((card, i) => {
        const reasonsGradient = {
            startFirstColor: gradientsArr[i].firstColor,
            startSecondColor: gradientsArr[i].secondColor,
            endFirstColor: gradientsArr[i].secondColor,
            endSecondColor: gradientsArr[i].firstColor,
            duration: 6000,
            isLinearGradient: false,
            isThreeColors: false,
            startFirstPercent: '187.19%',
            startSecondPercent: '371.73%',
            endFirstPercent: '118.04%',
            endSecondPercent: '111.29%',
            firstColorPercent: '0%',
            secondColorPercent: '100%'
        }
        const reasonsGradientAnimation = new gradientAnimation(card, reasonsGradient);

        card.addEventListener('mouseover', () => {
            console.log(card);
            reasonsGradientAnimation.startAnimation();
        });

        card.addEventListener('mouseout', () => {
            reasonsGradientAnimation.stopAnimation();
            card.style.backgroundImage = `linear-gradient(90deg, #32364F 0%, #26293B 100%)`;
        });
    });
}

