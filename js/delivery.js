//const planetOutlinePath = document.querySelector('.delivery__planet-outline path');
//const planetImg = document.querySelector('.delivery__img');

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
