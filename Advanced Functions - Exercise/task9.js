function getFibonacci() {

    let previous = 0;
    let current = 1;
    return function () {
        let next = previous + current;
        previous = current;
        current = next;
        return previous;
    }
}

let fibonacci = getFibonacci();
console.log(fibonacci()); // 1
console.log(fibonacci()); // 1
console.log(fibonacci()); // 2
console.log(fibonacci()); // 3
console.log(fibonacci()); // 5
console.log(fibonacci()); // 8
console.log(fibonacci()); // 13
console.log(fibonacci()); // 21
