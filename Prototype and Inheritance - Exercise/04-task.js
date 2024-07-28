// Write a function that returns three classes: Figure, Circle, and Rectangle. Figure has a
// units property (default &quot;cm&quot;), a getter area, and methods changeUnits and toString.
// Circle and Rectangle extend Figure and override area and toString appropriately.

class Figure {

    constructor(units = 'cm') {
        this.units = units
    }

    get area() {
        return this.area;
    }

    changeUnits(newUnits) {
        this.units = newUnits
    }

    toString() {
        return `Figure with units: ${this.units}`;
    }
}

class Circle extends Figure {
    constructor(units, radius) {
        super(units);
        this.radius = radius;
    }

    get area() {
        let radius = this.radius;

        if (this.units === 'mm') {
            radius *= 10;
        } else if (this.units === 'm') {
            radius /= 100
        } else if (this.units === 'dm') {
            radius /= 10
        }

        return Number((Math.PI * Math.pow(radius, 2)).toFixed(2));
    }

    toString() {
        return `Circle units: ${this.units}, radius: ${this.radius} ${this.units}, area: ${this.area} ${this.units}²`;
    }
}


const circleUnits = new Circle('cm', 4);
console.log('Figure area: ' + circleUnits.area);
console.log(circleUnits.toString());
console.log('------------------------------');
circleUnits.changeUnits('m');
console.log('Figure area: ' + circleUnits.area);
console.log(circleUnits.toString());
console.log('------------------------------');
circleUnits.changeUnits('dm');
console.log('Figure area: ' + circleUnits.area);
console.log(circleUnits.toString());
console.log();
console.log();
console.log();


class Rectangle extends Figure {
    constructor(units, length, width) {
        super(units);
        this.length = length;
        this.width = width
    }

    get area() {
        let length = this.length;
        let width = this.width;


        if (this.units === 'mm') {
            length *= 10;
            width *= 10;
        } else if (this.units === 'm') {
            length /= 100;
            width /= 100;
        } else if (this.units === 'dm') {
            length /= 10;
            width /= 10;
        }

        return length * width;
    }

    toString() {
        return `Rectangle units: ${this.units}, length: ${this.length} ${this.units}, width: ${this.width} ${this.units}, area: ${this.area} ${this.units}²`;
    }
}


const rectangleUnits = new Rectangle('cm', 4, 5);
console.log('Figure area: ' + rectangleUnits.area);
console.log(rectangleUnits.toString());
console.log('------------------------------');
rectangleUnits.changeUnits('m');
console.log('Figure area: ' + rectangleUnits.area);
console.log(rectangleUnits.toString());
console.log('------------------------------');
rectangleUnits.changeUnits('dm');
console.log('Figure area: ' + rectangleUnits.area);
console.log(rectangleUnits.toString());
console.log();
console.log();
console.log();


function threeClasses() {
    return {
        Figure, Circle, Rectangle
    }
}

console.log(threeClasses());