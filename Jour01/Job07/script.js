
const joursFeries2024 = [
    new Date(2024, 0, 1),
    new Date(2024, 3, 1),
    new Date(2024, 4, 1),
    new Date(2024, 4, 8),
    new Date(2024, 4, 9),
    new Date(2024, 4, 20),
    new Date(2024, 6, 14),
    new Date(2024, 7, 15),
    new Date(2024, 10, 1),
    new Date(2024, 10, 11),
    new Date(2024, 11, 25)
];

const joursSemaine = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];

const moisAnnee = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];

function jourTravaille(date) {

    const jourSemaine = date.getDay();
    const mois = date.getMonth() + 1;
    
    const nomJour = joursSemaine[jourSemaine];
    const moisEnCours = moisAnnee[mois];

    for (const jourFerie of joursFeries2024) {
        if (date.getTime() === jourFerie.getTime()) {
            console.log(`Le ${nomJour} ${date.getDate()} ${moisEnCours} ${date.getFullYear()} est un jour férié.`);
            return;
        }
    }
    
    if (jourSemaine === 6 || jourSemaine === 0) {
        console.log(`Non, ${nomJour} ${date.getDate()} ${moisEnCours} ${date.getFullYear()} est un week-end.`);
    } else {
        console.log(`Oui ${nomJour} ${date.getDate()} ${moisEnCours} ${date.getFullYear()} est un jour travaillé.`);
    }
}

const jour = new Date(2024, 3, 24);

console.log(jourTravaille(jour));
console.log(jourTravaille(new Date(2024, 3, 1)));
console.log(jourTravaille(new Date(2024, 5, 8)));