
function fizzBuzz() {
   for (let Nb = 1; Nb <= 151; Nb++) {
       if (Nb % 3 === 0 && Nb % 5 === 0) {
           console.log("FizzBuzz");
       } else if (Nb % 3 === 0) {
           console.log("Fizz");
       } else if (Nb % 5 === 0) {
           console.log("Buzz");
       } else {
           console.log(Nb);
       }
   }
}

fizzBuzz();
