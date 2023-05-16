const digits = document.querySelectorAll('.achievements__digit');

const number = {count: 0};

digits.forEach((digit) => {
    let str = digit.innerHTML;
    str = str.substring(0, digit.innerHTML.length - 1);
    anime({
        targets: number,
        count: +str,
        round: 1,
        duration: 10000,
        update: function() {
            if (number.count <= +str)
                digit.innerHTML = number.count + "+";
        }
    });
});