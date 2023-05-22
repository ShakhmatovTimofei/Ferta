screenWidth = document.body.clientWidth;

const glideJsUrl = 'js/glide.js';
const sliderUrl = 'js/slider.js';

function createScript(url) {
    const script = document.createElement('script');
    script.src = url;
    document.head.appendChild(script);
    return script;
}

if (screenWidth <= 1023) {
    const script = createScript(glideJsUrl)
    script.onload = function() {
        createScript(sliderUrl);
    }
}

