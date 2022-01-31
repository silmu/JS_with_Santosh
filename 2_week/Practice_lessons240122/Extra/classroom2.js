'use strict';

/**
Task 1;
let myAlphabet = ['A', 'B', 'C', 'D','E','F', 'G'];
What is the length of the array?
Write a function called myAlphabetLength which console.logs the length of the array
Within the function also use an if-conditional statement that checks if the number of items within the array are less than 5
**/

/**
Task 2;
Declare a arrow function checkFunc that takes a string and a boolean as parameters
Call the function using 2 arguments
**/

/**
Task 3;
Declare and initialize an array called Planets with 5 string values
console.log each item in the array
Also console.log the index in each iteration
**/

/**
Task 4:
Declare and initialize an array called wowDatatypes
The array must have 5 different data types (NOT objects)
Iterate over the array and console.log each item in the array + it’s index and data type in the array
**/

/**
Task 5:
console.log each item in this array WITHOUT using a for loop
   let myArr = [ 1, 2, 'One', true];
**/

/**
Task 6:
let student1Courses = ['Math', 'English', 'JSProgramming'];
let student2Courses = ['Geography', 'Spanish', 'JSProgramming'];
Loop over the 2 arrays and if there are any common courses, if so console.log them
**/

/*

Task 7:
let furniture = ['Table', 'Chairs','Couch'];
For each item in this array console.log the letters in each item
**/

let myAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
let str = 'Is it true?';

//Task 1. Check length of an array
const myAlphabetLength = (arr) => {
  arr.length < 5
    ? console.log('The length is smaller than 5.')
    : console.log('The length is bigger than 5.');
  return arr.length;
};
console.log(
  'The length of the array is ' + myAlphabetLength(myAlphabet) + '.\n'
);
//Task 2. Check if true
const checkFunc = (str, bool) => str + ' ' + bool + '\n';
console.log(checkFunc(str, 5 < 2));

//Task 3. Iterate over array
const planets = ['Earth', 'Mercury', 'Venus', 'Mars', 'Jupiter'];

const logItemsOnArray = (arr) => {
  let i = 1;
  arr.forEach((element) => {
    console.log(`${element} at iteration ${i}.`);
    i++;
  });
  console.log('\n');
};
logItemsOnArray(planets);

//Task 4. Iterate over array with different data types
const wowDatatypes = [1, 'Sun', ['Hello', 'Friend'], true];

const logItemsAndDataTypes = (arr) => {
  let i = 1;
  arr.forEach((element) => {
    let type = typeof element;
    console.log(`${element}. Iteration: ${i}. Data type: ${type}`);
    i++;
  });
  console.log('\n');
};
logItemsAndDataTypes(wowDatatypes);

//Task 5. Log items of array without for loop
const myArr = [1, 2, 'One', true];
//1 solution
console.log(`${myArr}`);
//2 solution
myArr.forEach((el) => console.log(el));

//Task 6. Find matching courses
let student1Courses = ['Math', 'English', 'JSProgramming'];
let student2Courses = ['Geography', 'Spanish', 'JSProgramming'];

const findCourse = (arr1, arr2) => {
  const matchingCourses = arr1.filter((course) => arr2.includes(course));
  return matchingCourses.join('');
};

console.log(findCourse(student1Courses, student2Courses));

//Task 7. Log each letter
let furniture = ['Table', 'Chairs', 'Couch'];
furniture.forEach((item) =>
  item.split('').forEach((char) => console.log(char))
);
