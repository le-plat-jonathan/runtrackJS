function tri(numbers, order) {
    if (order === 'asc') {
        return numbers.sort((a, z) => a - z);
    } else if (order === 'desc') {
        return numbers.sort((a, z) => z - a);
    } else {
        console.error("Il faut choisir l'ordre de tri");
    }
}

let numbers = [5, 2, 8, 1, 4, 25, 12, 10, 19, 999];

console.log(tri(numbers, 'asc'));
console.log(tri(numbers, 'desc'));
