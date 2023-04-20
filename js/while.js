"use strict";


let z=1;
while (z < 70000) {
    console.log(z);
    z *= 2;
}

// let x = 1
// while (x < Math.pow(100,6)) {
//     console.log(x);
//     x *= Math.pow(2, 2);
// }

var allCones = Math.floor(Math.random() * 50) + 50;
console.log(`${allCones} ready to sell`)
do {

    let conesSold = Math.floor(Math.random() * 5) + 1;
    console.log(`${conesSold} cones sold!`)
    if(allCones < conesSold){
        console.log(`Sorry i cant sell you ${conesSold} cones, I have only ${allCones} left`)
    }
    allCones = allCones - conesSold
} while(allCones > 0){
    console.log('Yay! i Sold them all!')
}

