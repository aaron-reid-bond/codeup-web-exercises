"use strict";

let userNumber = parseFloat(prompt("give me an odd number!"))
for (var x = 1; x < 50; x += 2) {
    if (x === userNumber) {
        console.log(`WE SKIPPED! ${userNumber}`)
        continue
    }

    console.log('odd number: ' + x);
}

