const learnMoreBtn = document.querySelector('.about-us__button');
const hiddenInfo = document.querySelector('.about-us__hidden-text');
const truck = document.querySelector('.about-us__truck');
const aboutUsBlock = document.querySelector('.about-us__block');

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
aboutUsGradientAnimation.startAnimation();