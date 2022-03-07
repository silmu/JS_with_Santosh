'use strict';

/*
Rewrite the canVote function as an async arrow function.
*/

/**
 * @param {number} age
 */
const canVote = async (age) => {
  return age >= 18;
};

// Sample usage - do not modify
const init = async (age) => console.log(await canVote(age));

init(20);
init(15);
// canVote(15).then((result) => {
//   console.log(result); // false
// });
