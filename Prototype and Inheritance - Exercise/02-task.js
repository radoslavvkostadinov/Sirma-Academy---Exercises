// Create a Person class with name and age properties, and a Student class that extends
// Person and adds a school property.

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const person = new Person('John', 20);
console.log(person);

class Student extends Person {
    constructor(name, age, school) {
        super(name, age);
        this.school = school
    }
}


const student = new Student('Ignat', 20, 'MG Varna');
console.log(student);
console.log(student.school);

