// Write a program that takes firstName and lastName as parameters and returns an object with firstName,
// lastName, and fullName properties. If firstName or lastName changes, fullName should also change. If fullName
// changes to a valid format, firstName and lastName should change accordingly.


function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    Object.defineProperty(this, 'fullName', {
        get: function () {
            return `${this.firstName} ${this.lastName}`
        },

        set: function (value) {
            const [firstName, lastName] = value.split(' ');

            if (isNaN(parseFloat(firstName)) || isNaN(parseFloat(lastName))) {
                this.firstName = firstName;
                this.lastName = lastName;
            } else {
                console.log('First name and last name cannot be numbers.');
            }
        },
        enumerable: true,
        configurable: false,
    })
}

const myFullName = new Person('Radoslav', 'Kostadinov');
console.log(myFullName.firstName);
console.log(myFullName.lastName);

// 100 % linked
myFullName.fullName = 'Kostadin Radoslavov';
console.log(myFullName.firstName);
console.log(myFullName.lastName);

// Attempt to delete the fullName property :(
delete myFullName.fullName;
console.log(myFullName.fullName);

myFullName.firstName = 'John';
myFullName.lastName = 'Doe';
console.log(myFullName.fullName);


