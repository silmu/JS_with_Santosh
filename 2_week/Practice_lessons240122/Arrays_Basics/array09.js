'use strict';

/**
Complete the function sumGrades such that it returns the sum of all the grades
it receives as a parameter.

/**
 * @param {number[]} grades
 */

function sumGrades3(grades) {
  let sum = 0;
  grades.forEach((grade) => (sum += grade));
  return sum;
}

function sumGrades(grades) {
  return grades.reduce((a, b) => a + b);
}

const sumGrades2 = (grades) => grades.reduce((a, b) => a + b);

console.time();
console.log(sumGrades([15, 5, 10]));
console.timeEnd();

console.time();
console.log(sumGrades3([15, 5, 10]));
console.timeEnd();

console.time();
console.log(sumGrades2([15, 5, 10]));
console.timeEnd();
