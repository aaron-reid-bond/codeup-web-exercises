"use strict";

// let userNumber = parseFloat(prompt("give me an odd number!"))

while(true){
    let userNumber1 = parseFloat(prompt("give me an odd number!"))
    if(userNumber1 >= 1 && userNumber1 <= 50 && userNumber1 % 2 === 0){
      break;
    }
}

// test 1
// let userNumber = parseFloat(prompt("give me an odd number!"))
// for (var x = 1; x < 50; x += 2) {
//     if (x === userNumber) {
//         console.log(`WE SKIPPED! ${userNumber}`)
//         continue
//     }
//
//     console.log('odd number: ' + x);
// }



//test 2
// let oddNumber = parseFloat(prompt("give me an odd number between 1 and 50"));
//
// do {
//     if (oddNumber % 2 === 0) {
//         oddNumber = parseFloat(prompt("The number " + oddNumber + " is an even number. Please enter an odd number between 1 and 50"));
//     }
// } while (oddNumber % 2 === 0)
//
// for (let x = 1; x < 50; x += 2) {
//     if (x === oddNumber) {
//         console.log(`WE SKIPPED! ${oddNumber}`)
//         continue
//     }
//     console.log('odd number: ' + x);
// }

//test 3
function test(){
    let oddNumber = parseFloat(prompt("give me an odd number between 1 and 50"));
    do {
        if (oddNumber % 2 === 0) {
            oddNumber = parseFloat(prompt("The number " + oddNumber + " is an even number. Please enter an odd number between 1 and 50"));
        }
    } while (oddNumber % 2 === 0)

    for (let x = 1; x < 50; x += 2) {
        if (x === oddNumber) {
            console.log(`WE SKIPPED! ${oddNumber}`)
            continue
        }
        console.log('odd number: ' + x);
    }
}

test()
