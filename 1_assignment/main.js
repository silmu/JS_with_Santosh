const btnAdd = document.querySelector('#btn-add');
const btnRemove = document.querySelector('#btn-done');
let itemToAdd = document.querySelector('#add');
let itemList = document.querySelector('.itemList');
const toDoList = [];

const addItem = () => {
  if (itemToAdd.value !== '') {
    toDoList.push(itemToAdd.value);
    console.log(toDoList);
    itemList.insertAdjacentHTML(
      'beforeend',
      `<li><input type="checkbox class="check">${itemToAdd.value}</li>`
    );
  }
};

const removeItem = () => {
  let taskList = document.querySelectorAll('li');
  taskList.forEach((task) => {
    if (task.checked !== true) {
    }
  });
  console.log(itemList);
};

btnAdd.addEventListener('click', addItem);
btnRemove.addEventListener('click', removeItem);
