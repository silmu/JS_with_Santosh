/** @param {string} name */
function getNumberOfChars(name) {
  // return the number of characters in: name
  return name.length;
}

/** @param {string} name */
function getLower(name) {
  // return name all in lower case (example: "ABC" becomes "abc")
  return name.toLowerCase();
}

/** @param {string} name */
function getUpper(name) {
  // return name all in upper case (example: "abc" becomes "ABC")
  return name.toUpperCase();
}

/* Do not touch below this line  */

let answer1 = document.querySelector("#answer1");
let answer2 = document.querySelector("#answer2");
let answer3 = document.querySelector("#answer3");

let name = document.querySelector("#your-name");

name.addEventListener("keyup", () => {
  answer1.textContent = getNumberOfChars(name.value);
  answer2.textContent = getLower(name.value);
  answer3.textContent = getUpper(name.value);
});
