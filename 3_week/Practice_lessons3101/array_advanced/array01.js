'use strict';

/**
Complete the function shouldAdjustGrades such that it returns true when the grades need to be increased.
Grades should be increased when at least one of them is failing (10 and above are passing).
/**
 * @param {number[]} grades
 */
const shouldAdjustGrades = (grades) => grades.some((grade) => grade < 10);

// Sample usage - do not modify
console.log(shouldAdjustGrades([10, 12, 10, 14])); // false
console.log(shouldAdjustGrades([12, 8, 17])); // true
