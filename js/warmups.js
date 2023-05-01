"use strict";

// 1
// function seven() {
//     return "S-E-V-E-N-!"
// }

// console.log(seven());

function ranNum (max, min){
    return Math.floor(Math.random() * (max - min +1)) + min;
}
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
findFactors(ranNum(500, 1));