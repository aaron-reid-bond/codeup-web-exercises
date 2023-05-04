"use strict";

// 1
// function seven() {
//     return "S-E-V-E-N-!"
// }

// console.log(seven());

// 2
// function ranNum (max, min){
//     return Math.floor(Math.random() * (max - min +1)) + min;
// }
// function findFactors(x) {
//     let arr = []
//     if(typeof x === "number" && !isNaN(x)) {
//         for(let i = 1; i <= x; i++){
//             if (x % i === 0) {
//                 arr.push(i)
//             }
//         } console.log(arr)
//     } else {
//         return false
//     }
// }
//
// console.log(findFactors(ranNum(500, 1)));

// 3
// function countEs(x) {
//     if(typeof x === "string"){
//         let lowercase = x.toLowerCase()
//         let count = (lowercase.match(/e/g) || []).length;
//         return count
//     } else {
//         return false
//     }
// }
//
// console.log(countEs("Ease")); // returns 2;
// console.log(countEs("teleconference")); // returns 5;
// console.log(countEs("TOM")); // returns 0;
// console.log(countEs(true)); // returns false;
// console.log(countEs(['e', 'E'])); // returns false;
// console.log(countEs()); // returns false;

// Write a function that takes in a string and returns true if the argument contains at least one instance of the letter ‘e’. This should be case-insensitive. If the argument is not a string, or if the argument does not contain ‘e’ it should return false.

// 4
// function isThereAnE (x) {
//     if(typeof x === "string"){
//         let lowCase = x.toLowerCase()
//         let test = lowCase.includes('e')
//         return  test
//     } else {
//         return false
//     }
// }
//
// console.log(isThereAnE('Bob'));
// console.log(isThereAnE('Wille'));
// console.log(isThereAnE('Entropy'));
// console.log(isThereAnE('Entitled'));
// console.log(isThereAnE(['1', 'Five']));
// console.log(isThereAnE(63));

function fizzBuzz () {
    for(var i = 1; i <= 100; i++) {
        if(i % 3 === 0 && i % 5 === 0) {
            console.log('Fizz Buzz')
        } else if(i % 3 === 0) {
            console.log('Fizz');
        } else {
            console.log(i)
        }
    }

}

fizzBuzz()