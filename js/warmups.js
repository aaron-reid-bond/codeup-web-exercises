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
function findFactors(x) {
    let arr = []
    if(typeof x === "number" && !isNaN(x)) {
        for(let i = 1; i <= x; i++){
            if (x % i === 0) {
                arr.push(i)
            }
        } console.log(arr)
    } else {
        return false
    }
}
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

// 5
// function fizzBuzz () {
//     for(var i = 1; i <= 100; i++) {
//         if(i % 3 === 0 && i % 5 === 0) {
//             console.log('Fizz Buzz')
//         } else if(i % 3 === 0) {
//             console.log('Fizz');
//         } else if(i % 5 === 0) {
//             console.log('Buzz');
//         } else {
//             console.log(i)
//         }
//     }
//
// }
//
// fizzBuzz()

// 6
// let i = 2;
// const n = 1000000;
//
// do {
//     console.log(i);
//     i = Math.pow(i, 2);
// } while(i < n);

// 7
// function addEmUp(arr){
//     let value = 0
//     for (let i = 0; i < arr.length; i++) {
//         value += arr[i]
//     } return value
// }
//
// console.log(addEmUp([2,6,19])); // returns 27
// console.log(addEmUp([-99, 180, -5])); // returns 76
// console.log(addEmUp([44,10,7])); // returns 61
// console.log(addEmUp([-100])); // returns -100
// console.log(addEmUp([1,2,3,4,5,6,7,8,9,10])); // returns 55
// console.log(addEmUp([-13, -92, -3500])) // returns -3605

//8
// function explainString(str){
//     return {
//         string: str,
//         numberOfEs: countEs(str),
//         isEvenLength: (str.length % 2 ===0)
//     }
// }
// console.log(explainString("cheese"));
// console.log(explainString("dog"));

//9
// Write a function that takes in an array of objects and returns an array containing all of the names from the original array.

const hamsters = [
    {
        name: "Hamtaro",
        heightInMM: 86,
        fur: ['orange', 'white'],
        gender: "male",
        dateOfBirth: "August 6"
    } , {
        name: "Bijou",
        heightInMM: 75,
        fur: ['white'],
        gender: "female",
        dateOfBirth: "July 10"
    } , {
        name: "Oxnard",
        heightInMM: 100,
        fur: ['grey', 'white'],
        gender: "male",
        dateOfBirth: "May 3"
    } , {
        name: "Boss",
        heightInMM: 120,
        fur: ['brown', 'white'],
        gender: "male",
        dateOfBirth: "September 21"
    } , {
        name: "Snoozer",
        heightInMM: 85,
        fur: ['brown', 'white', "pink"],
        gender: "male",
        dateOfBirth: "January 14"
    }
];
//
// function extractNames(obj) {
//    let arr= []
//        obj.forEach(function (el){
//            arr.push(el.name);
//        });
//    return arr
// }
//
//
// console.log(extractNames(hamsters)); // returns ["Hamtaro", "Bijou", "Oxnard", "Boss", "Snoozer"];

// 10

// function heightMM (arr) {
//     const res = {
//         name: '',
//         heightInMM: -Infinity,
//         fur: '',
//         gender: '',
//         dateOfBirth: ''
//     };
//     arr.forEach(el => {
//         const { name, heightInMM, fur, gender, dateOfBirth} = el;
//         if(heightInMM > res.heightInMM){
//             res.name = name;
//             res.heightInMM = heightInMM;
//             res.fur = fur
//             res.gender = gender
//             res.dateOfBirth = dateOfBirth
//         };
//     });
//     return res;
// }
//
// console.log(heightMM(hamsters));

// 11

// function singleFurColor(arr) {
//     const res = {
//         name: '',
//         heightInMM: '',
//         fur: '',
//         gender: '',
//         dateOfBirth: ''
//     };
//     arr.forEach(el => {
//         const {name, heightInMM, fur, gender, dateOfBirth} = el;
//         if(fur > res.fur){
//             res.name = name;
//             res.heightInMM = heightInMM;
//             res.fur = fur
//             res.gender = gender
//             res.dateOfBirth = dateOfBirth
//         };
//     });
//     return res
// }
//
// console.log(singleFurColor(hamsters));

// 12
// function mostColorful(arr) {
//     let mostColors = {fur: []};
//     arr.forEach(function(obj) {
//         if (obj.fur.length > mostColors.fur.length) {
//             mostColors = obj;
//         }
//     });
//     return mostColors;
// }
//
// console.log(mostColorful(hamsters));

// 13
// function describeNumber(num){
//
//     let obj = {
//         number: num,
//         evenOrOdd: ((num % 2 === 0) ? 'even' : 'odd'),
//         factors: findFactors(num),
//         numberOfDigits: (`${num}`).length
//         }
//     return obj
// }
// I was unable to get this one complete
// console.log(describeNumber(19));

// 14
function multiplyElementsByThree(arr) {
    var scaledArray = [];
    arr.forEach(function(element, index) {
        scaledArray[index] = element * 3;
    });
    return scaledArray
}

console.log(multiplyElementsByThree([3,4,5])); // returns [9, 12, 15];
console.log(multiplyElementsByThree([12,8])); // returns [36, 24];
console.log(multiplyElementsByThree([100])); // returns [300];
console.log(multiplyElementsByThree([15, 9, 33, 16, 50])); // returns [45, 27, 99, 48, 150];