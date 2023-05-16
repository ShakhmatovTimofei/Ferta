const truckPath = document.querySelector('.about-us__truck path'),
      planetOutlinePath = document.querySelector('.delivery__planet-outline path'),
      planetImg = document.querySelector('.delivery__img'),
      personPath = document.querySelector('.calc-price__person');
// truck outline animation
anime({
    targets: truckPath,
    strokeDashoffset: [1000, 0],
    easing: 'easeInOutSine',
    duration: 3000,
    direction: 'normal',
});

// planet outline and image animation
const planetAnim = anime.timeline({
    easing: 'easeInOutSine',
    duration: 4000,
    direction: 'normal',
})
.add({
    targets: planetOutlinePath,
    strokeDashoffset: [6000, 0]
})
.add({
    targets: planetOutlinePath,
    opacity: 0
}, 1000);

anime({
    targets: personPath,
    strokeDashoffset: [2000, 0],
    easing: 'easeInOutSine',
    duration: 5000,
    direction: 'normal',
});