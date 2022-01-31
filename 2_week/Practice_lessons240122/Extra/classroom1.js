'use strict';

/**

For each of the exercises below only 11 simple excercises, assume you are starting with the following people array.

let people = ["Sergei", "Mariia", "Boris", "Abel"];

1. Using a loop, iterate through this array and console.log all of the people (also rewrite it using arrow function).
2. Write the command to remove "Sergei" from the array.
3. Write the command to remove "Abel" from the array.
4. Write the command to add "Mahalete" to the front of the array.
5. Write the command to add your name to the end of the array.
6. Write the command to make a copy of the array using slice. The copy should NOT include "Sergei" or "Mariia".
7. Write the command that gives the indexOf where "Mariia" is located.
8. Write the command that gives the indexOf where "Foo" is located (this should return -1).
9. Redefine the people variable with the value you started with. Using the splice command, remove "Boris" from the array and add "Rakhi" and "Yulia". Your array should look like this when you are done ["Sergei", "Mariia", "Rakhi", "Yulia", "Abel"].
10. Create a new variable called withBob and set it equal to the people array concatenated with the string of "Bob".

/**
 */

/**
 * @param {people[]} strings
 */

let people = ['Sergei', 'Mariia', 'Boris', 'Abel'];
let peopleCopy = people;

const logAllPeople = (arr = [0]) =>
  arr.forEach((person) => console.log(person));

const removePerson = (arr = [0], persToRemove = '') => {
  //Filter out the specified person and return new array
  return arr.filter((person) => person !== persToRemove);
};

const addPersonFront = (arr = [0], persToAdd) => {
  //Add person at the beginning of the array
  arr.unshift(persToAdd);
  return arr;
};

const addPersonEnd = (arr = [0], persToAdd) => {
  arr.push(persToAdd);
  return arr;
};

const logWithBob = (arr = [0]) =>
  arr.forEach((person) => console.log(person + ' Bob'));

//Remove 'Sergei'
people = removePerson(people, 'Sergei');
logAllPeople(people);
console.log('2. Removed "Sergei".\n');

//Remove Abel
people = removePerson(people, 'Abel');
logAllPeople(people);
console.log('3. Removed "Abel".\n');

//Add Mahalete to the beginning
people = addPersonFront(people, 'Mahalete');
logAllPeople(people);
console.log('4. Added "Mahalete" to the beginning.\n');

//Add my name to the end
people = addPersonEnd(people, 'Sveta');
logAllPeople(people);
console.log('5. Added "Sveta" to the end.\n');

//Copy the original array without names 'Sergei' and 'Mariia' using splice
logAllPeople(peopleCopy.slice(2));
console.log('6. Used slice on the original array.\n');

//Log the index of Mariia
console.log(people.indexOf('Mariia'));
console.log('7. Logged the index of Mariia.\n');

//Log the index of 'Foo'
console.log(people.indexOf('Foo'));
console.log('8. Logged the index of Foo.\n');

//Remove "Sergei" and add "Rakhi" and "Yulia" instead using splice()
console.log(peopleCopy);
peopleCopy.splice(peopleCopy.indexOf('Sergei'), 1, 'Rakhi', 'Yulia');
console.log(peopleCopy);
console.log('9. Removed "Sergei" and added "Rakhi" and "Yulia" instead.\n');

//Log all people from array adding Bob to each name
logWithBob(peopleCopy);
console.log('10. Added "Bob" to each name.\n');
