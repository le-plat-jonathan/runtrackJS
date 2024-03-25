
function nombrePremier(nombre) {
    if (nombre <= 1) return false;
    if (nombre <= 3) return true;

    if (nombre % 2 === 0 || nombre % 3 === 0) return false;

    let i = 2;
    while (i * i <= nombre) {
        if (nombre % i === 0) return false;
        i ++; 
    }
    return true;
}

function sommeNombresPremiers(a, b) {
    if (nombrePremier(a) && nombrePremier(b)) {
        return a + b;
    } else {
        return false;
    }
}

const nombre1 = 17;
const nombre2 = 23;

let displayNbr1NonPremier = 0;
let displayNbr2NonPremier = 0;

let nbr1NonPremier = false;
let nbr2NonPremier = false;

function verifNbr1Premier (nombre1) {
    if (!nombrePremier(nombre1)) {
        nbr1NonPremier = true;
        displayNbr1NonPremier = nombre1;
    }
}

function verifNbr2Premier (nombre2) {
    if (!nombrePremier(nombre2)) {
        nbr2NonPremier = true;
        displayNbr2NonPremier = nombre2;
    }
}

verifNbr1Premier(nombre1);
verifNbr2Premier(nombre2);

const somme = sommeNombresPremiers(nombre1, nombre2);

if (somme !== false) {
    console.log(`La somme de ${nombre1} et ${nombre2} est ${somme}.`);
} else {
    if (nbr1NonPremier && nbr2NonPremier) {
        console.log(`${nombre1} et ${nombre2} ne sont pas des nombres premiers.`);
    } else if (nbr1NonPremier) {
        console.log(`${nombre1} n'est pas un nombre premier.`);
    } else if (nbr2NonPremier) {
        console.log(`${nombre2} n'est pas un nombre premier.`);
    }
}
