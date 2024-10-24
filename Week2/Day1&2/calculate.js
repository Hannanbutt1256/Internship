"use strict";
function calc(digit1, x, digit2) {
    switch (x) {
        case "+":
            console.log(digit1 + digit2);
            break;
        case "-":
            console.log(digit1 - digit2);
            break;
        case "*":
            console.log(digit1 * digit2);
            break;
        case "/":
            console.log(digit1 / digit2);
            break;
        default:
            console.log("Invalid Input");
            break;
    }
}
calc(3, '+', 4);
