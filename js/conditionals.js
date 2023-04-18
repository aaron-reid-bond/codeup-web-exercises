"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

function analyzeColor (color) {
    if (color === 'blue') {
        return "Blue is the color of water!";
    } else if (color === 'cyan') {
        return "I don't know anything about cyan";
    } else {
        return "Unfortunately " + color + " is not the color of water!";
}}



// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

// console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */

switch (randomColor) {
    case "blue":
        console.log("Blue is the color of water!");
        break
    case "cyan":
        console.log("I don't know anything about cyan");
        break
    default:
        console.log("Unfortunately " + randomColor + " is not the color of water!");

}



/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

let colorPrompt = prompt("Give me a color!");

alert(analyzeColor(colorPrompt));
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */


function calculateTotal(luckyNumber, total) {
    let ten = .10;
    let twentyFive = .25;
    let thirtyFive = .35;
    let fifty = .50;
    let oneHundred = 0;
    if(luckyNumber === 0){
        return 'Sorry no discount was applied to this purchase.';
    } else if(luckyNumber === 1){
        return 'Congrats you just won 10% off your purchase. your total is $' + total * ten;
    } else if(luckyNumber === 2){
        return 'Congrats you just won 25% off your purchase. your total is $' + total * twentyFive;
    } else if(luckyNumber === 3){
        return 'Congrats you just won 35% off your purchase. your total is $' + total * thirtyFive;
    } else if(luckyNumber === 4){
        return 'Congrats you just won 50% off your purchase. your total is $' + total * fifty;
    } else if(luckyNumber === 5){
        return 'Congrats you just won 100% off your purchase. your total is $' + total * oneHundred;
}}

//console.log(calculateTotal(4, 100));

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6

var luckyNumber = Math.floor(Math.random() * 6);
let totalBill =prompt('What is your total bill?');

console.log(calculateTotal(luckyNumber, totalBill));

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
let numberConfirm = confirm('Would you like to enter a number?');

function userConfirm (numberConfirm) {
    if(numberConfirm === true) {
        let userNumber = prompt('What number would you like to use?');


        function isNumber (userNumber){
            if(isNaN(userNumber)){
                alert(userNumber + ' is not a number')
            }
        }

        isNumber(userNumber)
        function evenNumber (userNumber){
            if(userNumber % 2 === 0) {
                alert('Your number ' + userNumber + ' is even!');
            } else {
                alert('Your number ' + userNumber + ' is odd!');
            }
        }

        evenNumber(userNumber);

        function add100 (userNumber){
            alert('Your number number ' + userNumber + ' + 100 = ' + (Number(userNumber)+ 100));
        }

        add100(userNumber);

        function isPositive (userNumber) {
            if (userNumber > 0) {
                alert("The number is positive");
            } else if (userNumber === 0) {
                alert("The number is zero");
            } else {
                alert("The number is negative");
            }
        }

        isPositive(userNumber);
    } else {
        alert('Oh ok then.')
    }

}

userConfirm(numberConfirm)