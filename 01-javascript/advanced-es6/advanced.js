console.log('Hello world from Node.js');

// ES6 Advanced Features

// Classes
class Actor {
    awardSpeech() {
        console.log('Thanks for the award!');
    }
}

class MarxBrother extends Actor { // inheritance
    constructor(firstName, instrument, vice) { // exactly the same as Ruby's initialize()
        super(); // this runs the constructor from Actor (if any)
        console.log('the constructor runs automatically');
        this.firstName = firstName;
        this.instrument = instrument;
        this.vice = vice;
        this.surname = "Marx";
    }
}

const groucho = new MarxBrother("Groucho", "guitar", "cigars");
const harpo = new MarxBrother("Harpo");
harpo.awardSpeech();
console.log(groucho.surname); // "Marx"

// Arrow functions ////////////////////////////////////////////////////////////

// you have probably typed function () {} enough times
// THESE ARROW FUNCTIONS BEHAVE DIFFERENTLY WITH `this`

// const add = function (a, b) {
//     return a + b;
// }

// fat arrow =>
const add = (a, b) => {
    return a + b;
};

console.log( add(11, 3) );

// arrow functions have implicit return IF you don't use curlies
const quickAdd = (a, b) => a + b; // implicit return

console.log( quickAdd(75, 3) );

// Destructuring
