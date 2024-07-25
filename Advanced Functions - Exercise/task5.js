function createPrivateCounter() {
    let counter = 0;
    return {
        increment: function () {
            counter++;
        },
        getCount: function () {
            return counter;
        }
    }
}

const counter = createPrivateCounter();
counter.increment();
console.log(counter.getCount()); // Output: 1
counter.increment();
console.log(counter.getCount()); // Output: 2