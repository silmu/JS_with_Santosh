'use strict';

/**
Write a function named pluralize that:
takes 2 arguments, a noun and a number.
returns the number and pluralized form, like "5 cats" or "1 dog".
Call that function for a few different scores and log the result to make sure it works.
Bonus: Make it handle a few collective nouns like "sheep" and "geese".

/**
 * @param {string}
 */

function pluralize(noun, number) {
  if (noun === 'sheep') noun = 'sheep';
  else if (noun === 'goose' && number > 1) noun = 'geese';

  if (number >= 2 && noun !== 'sheep' && noun !== 'geese') {
    noun += 's';
  }
  return `${number} ${noun}`;
}

function pluralize2(n, num) {
  if (num == 1 || n === 'sheep') {
    return `${num} ${n}`;
  } else if (num > 1 || n === 0) {
    if (n === 'goose') return `${num} geese`;
    else return `${num} ${n}s`;
  }
}

console.time();
console.log('I have ' + pluralize('cat', 0));
console.log('I have ' + pluralize('cat', 1));
console.log('I have ' + pluralize('cat', 2));
console.log('I have ' + pluralize('goose', 2));
console.log('I have ' + pluralize('sheep', 2));
console.log('I have ' + pluralize('sheep', 1));
console.log('I have ' + pluralize('goose', 1));
console.timeEnd();

console.time();
console.log('I have ' + pluralize2('cat', 0));
console.log('I have ' + pluralize2('cat', 1));
console.log('I have ' + pluralize2('cat', 2));
console.log('I have ' + pluralize2('goose', 2));
console.log('I have ' + pluralize2('sheep', 2));
console.log('I have ' + pluralize2('sheep', 1));
console.log('I have ' + pluralize2('goose', 1));
console.timeEnd();
