"use strict";

function showMultiplicationTable(num){
    for (let x = 0; x <= 10; x++){
        console.log(`${num} x ${x} = ${x*num}`)
    }
}
showMultiplicationTable(7)



for (let x = 0; x <= 10; x++){
    let randNum = Math.floor(Math.random() * (200 - 20 + 1)) + 20;
    console.log(`${randNum} is ${randNum % 2 === 0 ? 'even' : 'not even'}`)
}


// my first try
// let rows = 9;
// let char = "";
//
// // https://www.etutorialspoint.com/index.php/679-number-pattern-program-in-javascript
// for (let i = 1; i <= rows; i++) {
//     for (let j = 1; j <= i; j++) {
//         char += i;
//     }
//    char += "\n";
// }
// console.log(char);

//cody example

for (var i = 1; i < 10; i++) {
    var num = i.toString(); // Converts var i (number) into string
    console.log(num.repeat(i)); // Repeats string by var i and concatenates them together
}

for (let x = 100; x > 0; x -= 5){
    console.log(x)
}

// function ranNum (max, min){
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
//
//
// console.log(ranNum(3, 1))