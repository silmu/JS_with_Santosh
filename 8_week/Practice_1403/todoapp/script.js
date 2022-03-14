const input = document.querySelector('#item');
const form = document.querySelector('form');
let ul = document.querySelector('ul');
const btnClearAll = document.querySelector('#clearAll');
//Check if array exists, parse it as JSON to array, else create empty array
let itemsArr = localStorage.getItem('items')
  ? JSON.parse(localStorage.getItem('items'))
  : [];

//Saving array locally
localStorage.setItem('items', JSON.stringify(itemsArr));
//Get array from local storage
const data = JSON.parse(localStorage.getItem('items'));

//Create list
const createList = (text) => {
  const li = document.createElement('li');
  li.textContent = text;
  ul.appendChild(li);
};

//Add list item
form.addEventListener('submit', (e) => {
  e.preventDefault();
  itemsArr.push(input.value);
  localStorage.setItem('items', JSON.stringify(itemsArr));
  createList(input.value);
  input.value = '';
});

//Clear all items
btnClearAll.addEventListener('click', () => {
  localStorage.clear();
  location.reload();
});

data.forEach((item) => {
  createList(item);
});
