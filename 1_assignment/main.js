const btnAdd = document.querySelector('#btn-add');
const btnRemove = document.querySelector('#btn-done');
let itemToAdd = document.querySelector('#add');
let itemList = document.querySelector('.itemList');
const log = document.querySelector('.finished-tasks');
const btnPin = document.querySelector('#btn-pin');
const toDoList = [];
toDoList.push('Example task');

const addItem = () => {
  if (itemToAdd.value !== '') {
    toDoList.push(itemToAdd.value);

    let i = toDoList.indexOf(itemToAdd.value);

    console.log(itemToAdd.value + ' is at index ' + i);
    console.log(toDoList);

    itemList.insertAdjacentHTML(
      'beforeend',
      `<li><input type="checkbox" id="task${i}" class="check">
      <label for="task${i}" >${itemToAdd.value}</label></li>`
    );
  }
  //Clear the input box
  itemToAdd.value = '';
};

const logFinishedTask = (task) => {
  console.log(task + ' is logged.');
  log.insertAdjacentHTML('beforeend', `<li>${task}</li>`);
};

const removeItem = () => {
  console.log('Button Done is clicked');
  let checkboxes = document.querySelectorAll('.check');
  console.log(checkboxes);
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked === true) {
      //Get the label of the checked checkbox
      console.log(checkbox.nextElementSibling.innerHTML + ' is removed');

      //Remove task from JS list
      console.log(toDoList);
      let i = toDoList.indexOf(checkbox.nextElementSibling.innerHTML);
      if (i > -1) {
        toDoList.splice(i, 1);
      }
      console.log(toDoList);
      //Log the task
      logFinishedTask(checkbox.nextElementSibling.innerHTML);
      //Remove the task from HTML list
      checkbox.parentElement.remove();
    }
  });
};

const pin = () => {
  let checkboxes = document.querySelectorAll('.check');
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked === true) {
      //Get the label of the checked checkbox
      console.log(checkbox.nextElementSibling.innerHTML + ' is clicked');
      itemList = document.querySelector('.itemList');
      itemList.insertBefore(checkbox.parentElement, itemList.firstChild);
      checkbox.parentElement.classList.toggle('pinned');
      console.log('This should be a li element: ' + checkbox.parentElement);
    }
  });
};

btnAdd.addEventListener('click', addItem);
btnRemove.addEventListener('click', removeItem);
btnPin.addEventListener('click', pin);
