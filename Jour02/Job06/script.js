const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;

    function konamiCheck(event) {
        if (event.key.toLowerCase() === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                applyPlateformeStyle();
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    }

    function applyPlateformeStyle() {
        document.body.classList.add('plateforme');
    }

    document.addEventListener('keydown', konamiCheck);