let button = document.getElementById('button');
let compteur = document.getElementById('compteur');

let count = 0;

button.addEventListener('click', addOne);

function addOne() {
    count++;
    compteur.textContent = count;
}
