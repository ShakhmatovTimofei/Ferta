function scrollAnimation(parentBlock, jsAnimationFunc, funcStateVar = false, delay = 0, isGradient = false) {
  const scrollOffset = 100;
  const scrollElements = parentBlock.querySelectorAll(".scroll");
  const elementInView = (el, offset = 0) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
      elementTop <= 
      ((window.innerHeight || document.documentElement.clientHeight) - offset)
    );
  };
  const displayScrollElement = (el) => {
      if (!funcStateVar) {
        funcStateVar = true;
        jsAnimationFunc();
      }
      setTimeout(() => {
        el.classList.add('scroll-animation');
      }, delay);
  }
  const hideScrollElement = (el) => {
      el.classList.remove('scroll-animation');
      funcStateVar = false;
      if (isGradient) {
        stopAboutUsGradientAnimation();
      }
  }
  const handleScrollAnimation = () => {
      scrollElements.forEach((el) => {
        if (elementInView(parentBlock, scrollOffset)) {
          displayScrollElement(el);
        } else {
          hideScrollElement(el);
        }
      });
  }
  window.addEventListener('scroll', () => {
    handleScrollAnimation();
  });
}

function voidFunc() {};

const servicesScrollAnimation = new scrollAnimation(services, voidFunc);

const aboutUsScrollAnimation = new scrollAnimation(aboutUsBlock, truckPathAnimation, isAnimationFinished, 1000, true);

const deliveryScrollAnimation = new scrollAnimation(delivery, planetOutlineAnimation);