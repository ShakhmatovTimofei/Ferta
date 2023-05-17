function gradientAnimation(animatedElement, gradientObject) {
    this.animatedElement = animatedElement;
    this.gradientObject = gradientObject;
    this.startAnimation = function() {
        animation.play();
    }
    this.stopAnimation = function() {
        animation.pause();
    }

    let animation = anime({
        targets: gradientObject,
        startFirstColor: gradientObject.endFirstColor,
        startSecondColor: gradientObject.endSecondColor,
        duration: gradientObject.duration,
        easing: 'linear',
        //round: 1,
        loop: true,
        direction: 'alternate',
        autoplay: false,
        update: function(a) {
            let value1 = a.animations[0].currentValue;
            let value2 = a.animations[1].currentValue;
            if (gradientObject.isLinearGradient) {
                if (gradientObject.isThreeColors) {
                    animatedElement.style.backgroundImage = `linear-gradient(${gradientObject.degrees}, 
                        ${gradientObject.additionalColor} ${gradientObject.firstColorPercent}, ${value1} 
                        ${gradientObject.secondColorPercent}, ${value2} ${gradientObject.thirdColorPercent})`;
                } else {
                    animatedElement.style.backgroundImage = `linear-gradient(${gradientObject.degrees}, ${value1} 
                        ${gradientObject.firstColorPercent}, ${value2} ${gradientObject.secondColorPercent})`;
                }
            } else {
                animatedElement.style.backgroundImage = `radial-gradient(${gradientObject.startFirstPercent} 
                    ${gradientObject.startSecondPercent} at ${gradientObject.endFirstPercent} 
                    ${gradientObject.endSecondPercent}, ${value1} ${gradientObject.firstColorPercent}, ${value2} 
                    ${gradientObject.secondColorPercent})`;
            }
            
        }
    });
}

