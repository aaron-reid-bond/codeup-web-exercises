"use strict";
console.log('Hellow from external JavaScript');

alert('Welcome to my Website!');

let favColor = prompt('What is your favorite color?');

alert('Holy poop ' + favColor + ' is my favorite color too');



let lM = prompt('How many days did you rent \"The Little Mermaid\"?');
let bB = prompt('How many days did you rent \"Brother Bear\"?');
let herc = prompt('How many days did you rent \"Hercules\"?');
let dayPrice = 3;

let total = (Number(lM) + Number(bB) + Number(herc))* dayPrice;

alert('For all the movies you rented you owe  $' + total + '! Please pay up.');

let googleWork = prompt('How many hours did you work for \"Google\"?');
let amazonWork = prompt('How many hours did you work for \"Amazon\"?');
let facebookWork = prompt('How many hours did you work for \"Facebook\"?');
let googlePay = 400;
let amazonPay = 380;
let facebookPay = 350;

let payCheck = ((Number(googleWork)* googlePay) + (Number(amazonWork)* amazonPay) + (Number(facebookWork)* facebookPay));

alert('For all the hours you will be paid  $' + payCheck + '! Dam Gurl! datz alot!');

let classFull = false;
let scheduleConflict = false;

let canEnrol =confirm('Would you like to enroll in this class?');

alert('Give me a minute to confirm if the class is open or not.');

function classEnrollment(classFull, scheduleConflict, canEnrol){
    if(classFull===true || scheduleConflict===true || canEnrol===true){
        alert('Sorry there is no room for you in the class!');
    }else{
        alert('Great news you can attend the class!');
    }
}
classEnrollment(classFull, scheduleConflict, canEnrol)

alert('Great news we have a free product offer! if you have 2 or more of x product and this offer is not expired then you will receive this product!')

alert('Even better news! Premium Members have no restrictions on the amount of product x to qualify!')

let item = 4
let expired =true
let premiumMember  = false

function offer(item, expired, premiumMember){
    if(item>2 && expired===false || premiumMember===true){
        alert("offer is valid");
    }else{
        alert("offer is not valid");
    }
}
offer(item, expired, premiumMember)