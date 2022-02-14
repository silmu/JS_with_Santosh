'use strict';

/**
Complete the renderShoppingList function such that it renders an <li> element
for every item in the items array it receives.
Also, the order of the items should be the same as the one in the array.
So, the first item should show up first (at the top).


/**
 * @param {string[]} items
 */
const list = document.querySelector('#shopping-list');

const renderShoppingList = (items) => {
  items.forEach((item) => {
    list.insertAdjacentHTML('beforeend', `<li>${item}</li>`);
  });
};
// Sample usage - do not modify
const sampleList = ['Pear', 'Orange', 'Banana', 'Coffee', 'Paper', 'Newspaper'];
console.log(renderShoppingList(sampleList));
