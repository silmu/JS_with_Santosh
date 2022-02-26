const btnAdd = document.querySelector('#btn-add');
const btnRemove = document.querySelector('#btn-done');
let itemToAdd = document.querySelector('#add');
let itemList = document.querySelector('.itemList');
const toDoList = [];

const addItem = () => {
  if (itemToAdd.value !== '') {
    toDoList.push('Example task');
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
};

const removeItem = () => {
  console.log('Button Mark as done is clicked');
  let checkboxes = document.querySelectorAll('.check');
  console.log(checkboxes);
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked === true) {
      //Get the label of the checked checkbox
      console.log(checkbox.nextElementSibling.innerHTML + ' is removed');
      //Remove the task from HTML list
      checkbox.parentElement.remove();
      //Remove task from JS list
      let i = toDoList.indexOf(checkbox.nextElementSibling.innerHTML);
    }
  });
};

btnAdd.addEventListener('click', addItem);
btnRemove.addEventListener('click', removeItem);
