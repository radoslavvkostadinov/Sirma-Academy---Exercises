function partialSum(number) {
    return function (a, b, c) {
        return number + a + b + c;
    }
}

const addFive = partialSum(5);
console.log(addFive(1, 2, 3));

