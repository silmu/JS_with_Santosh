"use strict";

/**
Write a function named greaterNum that:
takes 2 arguments, both numbers.
returns whichever number is the greater (higher) number.
Call that function 2 times with different number pairs, and log the output to make sure it works
(e.g. "The greater number of 5 and 10 is 10.").


/**
 * @param {numbers} 
 */

function greaterNum(num1, num2) {
    let greaterNum;
    if(num1 > num2){
        greaterNum = num1;
    } else {
        greaterNum = num2;
    }
    return `The greater number of ${num1} and ${num2} is ${greaterNum}`;
}

console.log(greaterNum(5, 10));
console.log(greaterNum(15, 10));
