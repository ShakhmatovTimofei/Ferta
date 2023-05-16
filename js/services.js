const servicesCards = document.querySelectorAll('.card');
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
        card.style.cssText = "";
        cardImg[i].classList.remove('active');
    });
});