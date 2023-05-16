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

