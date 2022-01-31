/**
 * @param {array} items
 * @param {string} item
 */
//addItemshould add theitemit receives as a parameter to theitemsarray
const addItem = (items, value) => {
  let item = value;
  console.log(`Item ${item} added to the list.`);
  items.push(item);
  console.log(items.toString());
  return items;
};
/**
 * @param {array} items
 */
//exportLowerCasedCSVshould return a string containing all the items inlower caseand separated by a comma and a space character
const exportLowerCasedCSV = (arr) => arr.join(', ').toLowerCase();

// Sample usage - do not modify
let form = document.querySelector('#shopping-list-form');
let itemName = document.querySelector('#item-name');
let list = document.querySelector('#shopping-list');
const exportedJson = document.querySelector('#exported-json');

let items = [];

function render(items) {
  console.log('Items: ' + items.join(', '));
  list.innerHTML = '';
  items.forEach(function (item) {
    list.insertAdjacentHTML(
      'beforeend',
      `<li><div class="card">${item}</div></li>`
    );
  });
  exportedJson.textContent = exportLowerCasedCSV(items);
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  items = addItem(items, itemName.value);
  itemName.value = '';
  render(items);
});

render(items);
