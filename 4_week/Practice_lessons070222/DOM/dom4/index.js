/**
 * @param {string} cssSelector
 */
// const getTextFromSelector = (cssSelector) => {
//   let element = document.querySelector(cssSelector);
//   return element === null ? 'undefined' : element.textContent;
// };

const getTextFromSelector = (cssSelector) =>
  document.querySelector(cssSelector)?.textContent ?? 'undefined';

// Sample usage - do not modify
console.log(getTextFromSelector('h1')); // "First human lands on Mars!"
console.log(getTextFromSelector('h2')); // undefined
