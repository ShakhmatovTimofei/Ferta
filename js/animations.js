// buttons gradient animation
const headerContentButton = document.querySelector('.header__form-button');
const calcPriceButton = document.querySelector('.calc-price__button');

const buttons = [headerContentButton, calcPriceButton];

const buttonGradient = {
    startFirstColor: '#7E50C5',
    startSecondColor: '#009FF3',
    endFirstColor: '#009FF3',
    endSecondColor: '#7E50C5',
    duration: 6000,
    isLinearGradient: true,
    isThreeColors: false,
    degrees: '271.55deg',
    additionalColor: '',
    firstColorPercent: '1.26%',
    secondColorPercent: '98.78%',
    thirdColorPercent: ''
}

buttons.forEach(button => {
    const buttonGradientAnimation = new gradientAnimation(button, buttonGradient);
    button.addEventListener('mouseover', () => {
        buttonGradientAnimation.startAnimation();
    });
    
    button.addEventListener('mouseout', () => {
        buttonGradientAnimation.stopAnimation();
    });
});

// services cards animation
const services = document.querySelector('.services');
const servicesCards = services.querySelectorAll('.services__card');
const cardImg = services.querySelectorAll('.card__img');

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
        card.style.cssText = "";
        cardImg[i].classList.remove('active');
    });
});

// about us animation
const learnMoreBtn = document.querySelector('.about-us__button');
const hiddenInfo = document.querySelector('.about-us__hidden-text');
const truck = document.querySelector('.about-us__truck');
const aboutUsBlock = document.querySelector('.about-us__block');
const truckPath = document.querySelector('.about-us__truck path');
const aboutUsBlockOutline = document.querySelector('.about-us__outline');

learnMoreBtn.addEventListener('click', () => {
    hiddenInfo.classList.toggle('hidden');
    truck.classList.toggle('decreased');
    aboutUsBlock.classList.toggle('opened');

    if (!hiddenInfo.classList.contains('hidden')) {
        learnMoreBtn.innerHTML = "Скрыть -";
    } else {
        learnMoreBtn.innerHTML = "Узнать больше +";
    }

});

const aboutUsGradient = {
    startFirstColor: '#4F1C60',
    startSecondColor: '#8E1C6E',
    endFirstColor: '#321C60',
    endSecondColor: '#540D8C',
    duration: 6000,
    isLinearGradient: true,
    isThreeColors: true,
    degrees: '289.71deg',
    additionalColor: '#2F1C4D',
    firstColorPercent: '12.8%',
    secondColorPercent: '58.94%',
    thirdColorPercent: '97.99%'
}

const aboutUsGradientAnimation = new gradientAnimation(aboutUsBlock, aboutUsGradient);
function startAboutUsGradientAnimation() {
    aboutUsGradientAnimation.startAnimation();
}

function stopAboutUsGradientAnimation() {
    aboutUsGradientAnimation.stopAnimation();
    aboutUsBlock.style.background = 'transparent';
}
// truck outline animation
let isAnimationFinished;

function truckPathAnimation() {
    setTimeout(startAboutUsGradientAnimation, 3500);
    const aboutUsAnimation = anime.timeline({
        easing: 'easeInOutSine',
        direction: 'normal',
    })
    aboutUsAnimation
    .add({
        targets: aboutUsBlockOutline,
        opacity: 1
    })
    .add({
        targets: aboutUsBlockOutline,
        strokeDashoffset: [5000, 0],
    }, 1000)
    .add({
        targets: aboutUsBlockOutline,
        opacity: 0
    }, '+=1000')
    .add({
        targets: aboutUsBlock,
        backgroundColor: '#4a1d5e',
        duration: 2000
    }, '-=2000')
    .add({
        targets: truckPath,
        opacity: [0, 1],
    }, '-=3000')
    .add({
        targets: truckPath,
        strokeDashoffset: [1000, 0],
        easing: 'easeInOutSine',
        duration: 5000,
        direction: 'normal',
    }, '-=3000')
}

// delivery animation
const delivery = document.querySelector('.delivery');
const planetOutlinePath = document.querySelector('.delivery__planet-outline path'),
      planetImg = document.querySelector('.delivery__planet-img'),
      personPath = document.querySelector('.calc-price__person');

// planet outline and image animation
function planetOutlineAnimation() {
    const planetAnim = anime.timeline({
        easing: 'easeInOutSine',
        duration: 5000,
        direction: 'normal'
    })
    planetAnim
    .add({
        targets: planetOutlinePath,
        opacity: 1,
        duration: 100
    })
    .add({
        targets: planetOutlinePath,
        strokeDashoffset: [6000, 0],
        duration: 4000
    })
    .add({
        targets: planetImg,
        duration: 5000,
        opacity: [0, 1],
    }, '-=5000')
    .add({
        targets: planetOutlinePath,
        opacity: 0,
        duration: 1000
    }, '-=1000');
}

// achievments animation
// nubmers anim
const digitsBlock = document.querySelector('.digits');
const digits = document.querySelectorAll('.achievements__digit');

const number = {count: 0};

digits.forEach((digit) => {
    let str = digit.innerHTML;
    str = str.substring(0, digit.innerHTML.length - 1);
    anime({
        targets: number,
        count: +str,
        round: 1,
        duration: 10000,
        update: function() {
            if (number.count <= +str)
                digit.innerHTML = number.count + "+";
        }
    });
});

// reasons block animation
const reasonsCards = document.querySelectorAll('.reasons__reason');

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
        reasonsGradientAnimation.startAnimation();
    });

    card.addEventListener('mouseout', () => {
        reasonsGradientAnimation.stopAnimation();
        card.style.backgroundImage = `linear-gradient(90deg, #32364F 0%, #26293B 100%)`;
    });
});

// start-working block animation
// person outline animation
anime({
    targets: personPath,
    strokeDashoffset: [2000, 0],
    easing: 'easeInOutSine',
    duration: 5000,
    direction: 'normal',
});




