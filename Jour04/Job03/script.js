document.getElementById('btn').addEventListener('click', filtrer);

async function filtrer() {

    const formData = new FormData(document.getElementById('filterForm'));
    const id = formData.get('id').trim();
    const name = formData.get('name').trim();
    const type = formData.get('type').trim();

    try {
        const response = await fetch('pokemon.json');
        const data = await response.json();
        const pokedex = data.filter(pokemon => {
            return  (!id || JSON.stringify(pokemon.id).toLowerCase() === id ) &&
                    (!name || JSON.stringify(pokemon.name).toLowerCase().includes(name.toLowerCase())) &&
                    (!type || pokemon['type'] === type);
        });
        displayResult(pokedex);
    } catch (error) {
        console.error('Error with fetch operation:', error);
    }
}

function displayResult(pokedex) {
    const resultat = document.getElementById('results');
    resultat.innerHTML = '';

    if (pokedex.length === 0) {
        resultat.textContent = 'Aucun résultat trouvé.';
    } else {
        const ul = document.createElement('ul');
        pokedex.forEach(pokemon => {
            const li = document.createElement('li');
            li.textContent = `ID: ${pokemon.id}, name: ${JSON.stringify(pokemon.name)}, Type: ${pokemon.type}, Infos : ${JSON.stringify(pokemon.base)}`;
            ul.appendChild(li);
        });
        resultat.appendChild(ul);
    }
}
