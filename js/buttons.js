const button = document.querySelector('.header__form-button');

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

const buttonGradientAnimation = new gradientAnimation(button, buttonGradient);

button.addEventListener('mouseover', () => {
    console.log('over');
    buttonGradientAnimation.startAnimation();

});

button.addEventListener('mouseout', () => {
    buttonGradientAnimation.stopAnimation();
});
