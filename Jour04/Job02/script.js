function jsonValueKey(jsonString, key) {
    console.log(jsonString);

    if (key in jsonString) {
        return jsonString[key];
    } else {
        return "Clé non trouvée";
    }
}

const jsonString = {
    "name": "la plateforme",
    "adress": "8 rue d'hozier",
    "city": "Marseille",
    "nb_staff": "11",
    "creation": "2019"
};

const key = "city";
const value = jsonValueKey(jsonString, key);
const paragraph = document.createElement('p');
paragraph.textContent = `La ville précisé dans 'city' est ${value}`;
document.body.appendChild(paragraph);
