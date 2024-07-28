// Write a function that receives a class and attaches a species property with the value
// "Human" and a toSpeciesString() method that returns a string in the format "I am a
{/* <species> . <toString>" */ }

// function classFunc(classHere) {
//     classHere.prototype.species = "Human";
//     classHere.prototype.toSpeciesString = function () {
//         return "I am a " + this.species + " . " + this.toString();
//     };
// }


// class Person {
//     constructor(name) {
//         this.name = name;
//     }

//     toString() {
//         return this.name;
//     }
// }

// // Apply classFunc to the Person class
// classFunc(Person);

// // Create an instance of Person
// const person = new Person("John");

// console.log(person.toSpeciesString());
// console.log(person.species);
// console.log(person);


// Function to add species property and toSpeciesString method

function addSpeciesMixin(targetClass) {
    targetClass.prototype.species = "Human";
    targetClass.prototype.toSpeciesString = function () {
        return `I am a ${this.species}. ${this.toString()}`;
    };
}

class Person {
    constructor(name) {
        this.name = name;
    }

    toString() {
        return this.name;
    }
}

// Apply the mixin to the Person class
addSpeciesMixin(Person);

// Define another class with additional methods
class Worker {
    constructor(job) {
        this.job = job;
    }

    getJob() {
        return this.job;
    }
}

// Create a new class that composes Person and Worker
class Employee {
    constructor(name, job) {
        this.person = new Person(name);
        this.worker = new Worker(job);
    }

    toSpeciesString() {
        return this.person.toSpeciesString();
    }

    getJob() {
        return this.worker.getJob();
    }

    toString() {
        return `${this.person.toString()} - ${this.worker.getJob()}`;
    }
}

// Create an instance of Employee
const employee = new Employee("John", "Engineer");

console.log(employee.toSpeciesString()); // I am a Human. John
console.log(employee.getJob()); // Engineer
console.log(employee.toString()); // John - Engineer

