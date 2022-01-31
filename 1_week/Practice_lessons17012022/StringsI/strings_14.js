'use strict';
/**
Complete the function capitalize such that it capitalizes the name parameter it receives.
There's no capitalize method in JavaScript, so you have to write it yourself.

Look at the sample usage to understand what capitalization means, then look at the hints
if it's still not clear.

Tests:
returns a string
returns capitalized word

 * @param {string} word
 */
//substring()
function capitalize(word) {
    //Make the whole word to lower case and remove the first letter
    let wordToLower = word.toLowerCase().substring(1);
    let capitalLetter = word[0].toUpperCase();
    return capitalLetter + wordToLower;
}
//charAt()
function capitalize2(word) {
    return (word.charAt(0).toUpperCase()) + word.substring(1).toLowerCase();
}
//slice()
function capitalize3(word) {
    let wordToLower = (word.slice(1).toLowerCase());
    return word[0].toUpperCase() + wordToLower;
}

// Sample usage - do not modify
console.log(capitalize("sam")); // "Sam"
console.log(capitalize("ALEX")); // "Alex"
console.log(capitalize("chARLie")); // "Charlie"

console.log(capitalize2("sam")); // "Sam"
console.log(capitalize2("ALEX")); // "Alex"
console.log(capitalize2("chARLie")); // "Charlie"

console.log(capitalize3("sam")); // "Sam"
console.log(capitalize3("ALEX")); // "Alex"
console.log(capitalize3("chARLie")); // "Charlie"



