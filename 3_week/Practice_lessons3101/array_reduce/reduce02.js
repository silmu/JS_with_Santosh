'use strict';

/**
Calculate the sum of the grades array and store it in a variable called sum.

/**
 *
 */
let grades = [10, 5, 15, 20];

const sum = (arr) => arr.reduce((total, current) => total + current);
// calculate the sum of these grades
console.log(sum(grades));
