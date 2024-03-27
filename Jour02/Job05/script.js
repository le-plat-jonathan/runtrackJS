window.addEventListener('scroll', function() {
    let scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100;
    let color = getColorForPercentage(scrollPercentage);
    document.querySelector('footer').style.backgroundColor = color;
});

function getColorForPercentage(percentage) {
    let colorStart = [255, 0, 0];
    let colorEnd = [0, 0, 255];
    let color = [];
    for (let i = 0; i < 3; i++) {
        color[i] = Math.round(colorStart[i] + (colorEnd[i] - colorStart[i]) * (percentage / 100));
    }
    return 'rgb(' + color[0] + ', ' + color[1] + ', ' + color[2] + ')';
}
