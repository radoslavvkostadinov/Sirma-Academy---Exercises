// Write a function that receives a class and attaches a species property with the value
// "Human" and a toSpeciesString() method that returns a string in the format "I am a
{/* <species> . <toString>" */ }

function classManager(classHere) {
    classHere.prototype.species = 'Human';
    classHere.prototype.toSpeciesString = function () {
        return `I am a ${this.species} . My name is${this.name.toString()}`
    }
}

class Person {
    constructor(name) {
        this.name = name;
    }
}

classManager(Person);

const person = new Person('John');
console.log(person.toSpeciesString());

// Prototype chaining confirmation
console.log(Object.getPrototypeOf(classManager) === Function.prototype); // true
console.log(Object.getPrototypeOf(Function.prototype) === Object.prototype); // true
