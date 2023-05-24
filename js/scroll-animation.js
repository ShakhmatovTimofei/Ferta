// const servicesTextBlock = document.querySelector('.services__text-block');
// const servicesCardsScroll = document.querySelectorAll('.services__card');

// servicesTextBlock.classList.add('scroll-animation');
// servicesCardsScroll.forEach(card => {
//     card.classList.add('scroll-animation');
// });
// document.addEventListener('click', () => {
//     servicesTextBlock.classList.remove('scroll-animation');
//     let i = 0;
//     function cardsScrollAnimation() {
//         if (i < servicesCardsScroll.length) {
//             servicesCardsScroll[i].classList.remove('scroll-animation');
//             i++;
//             setTimeout(cardsScrollAnimation, 200);
//         }
//     }
//     cardsScrollAnimation();
// });

const scrollOffset = 100;
const scrollElements = document.querySelectorAll(".scroll");
const elementInView = (el, offset = 0) => {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop <= 
    ((window.innerHeight || document.documentElement.clientHeight) - offset)
  );
};
const displayScrollElement = (el) => {
    el.classList.add('scroll-animation');
}
const hideScrollElement = (el) => {
    el.classList.remove('scroll-animation');
}
const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 100)) {
          displayScrollElement(el);
        } else {
          hideScrollElement(el);
        }
    });
}
window.addEventListener('scroll', () => {
  handleScrollAnimation();
})