'use strict';

/**
Complete the function getLastCharacter such that it returns
the last character of the name parameter it receives.

Tests:
returns a string
returns last character


 * @param {string} name
 */
function getLastCharacter(name) {
    return name[name.length -1];
}

// Sample usage - do not modify
console.log(getLastCharacter("Sam")); // "m"
console.log(getLastCharacter("Alex")); // "x"
console.log(getLastCharacter("Charley")); // "y"
