const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = [];

   document.addEventListener("keydown", (e) => {

    konamiIndex.push(e.key);
    konamiIndex = konamiIndex.slice(-konamiCode.length);

    if (konamiIndex.join(``).toLowerCase() === konamiCode.join(``).toLowerCase()) {
        document.body.classList.add('plateforme');
        document.querySelector('h1').classList.add('title');
        document.querySelector('p').classList.add('text');
      }

   });