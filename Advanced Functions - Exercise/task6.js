// function multiply(a) {
//     return function (b) {
//         return function (c) {
//             return a * b * c;
//         }
//     }
// }

const multiply = a => b => c => a * b * c;
console.log(multiply(2)(3)(4)); 