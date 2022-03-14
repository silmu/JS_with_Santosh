'use strict';

class FetchWrapper {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  // async get(endpoint) {
  //   const response = await fetch(baseURL + '/' + endpoint);
  //   const data = await response.json();
  //   console.log(data);
  // }
  get(endpoint) {
    return fetch(this.baseURL + endpoint).then((response) => response.json());
  }

  put(endpoint, body) {
    return this._send('put', endpoint, body);
  }

  post(endpoint, body) {
    console.log('Post sent: ' + body);
    return this._send('post', endpoint, body);
  }

  patch(endpoint, body) {
    return this._send('patch', endpoint, body);
  }

  delete(endpoint, body) {
    return this._send('delete', endpoint, body);
  }

  _send(method, endpoint, body) {
    return fetch(this.baseURL + endpoint, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    }).then((response) => response.json());
  }
}

//Current endpoint: %7b0fa8c6aa-bac3-4cd0%7d
//{0fa8c6aa-bac3-4cd0}
const API = new FetchWrapper(
  'https://firestore.googleapis.com/v1/projects/programmingjs-90a13/databases/(default)/documents/'
);

//CHOOSING FOOD

const foodList = document.querySelector('.food-list');
const log = document.querySelector('.log');
const btnAddSelected = document.querySelector('#btn-add-selected');

//Fetch all food items
const displayFoodList = () => {
  API.get('{0fa8c6aa-bac3-4cd0}').then((data) => {
    data.documents.forEach((item) => {
      //Display list
      const li = document.createElement('li');
      li.textContent = `${item.fields.name.stringValue.toUpperCase()} - carbs: ${
        item.fields.carbs.integerValue
      }, fat: ${item.fields.fat.integerValue}, protein: ${
        item.fields.protein.integerValue
      }, calories: ${item.fields.calories.integerValue}`;
      //Add event listeners on li
      li.addEventListener('click', () => {
        //Assign active class to selected food item
        li.classList.toggle('active');
        console.log(`${li.textContent} is active`);
      });
      foodList.appendChild(li);
    });
  });
};

//Display food items list on load
displayFoodList();

//Add selected food item to log
const logOnClick = () => {
  btnAddSelected.addEventListener('click', () => {
    console.log('Button Add food is clicked');
    for (const el of foodList.children) {
      if (el.classList.contains('active')) {
        const li2 = document.createElement('li');
        li2.textContent = el.textContent;
        log.appendChild(li2);
        //Remove selection for active food after it's added
        el.classList.remove('active');
      }
    }
  });
};

//Calculate total
let totalCalories = 0;
let totalCarbs = 0;
let totalFat = 0;
let totalProtein = 0;
const totalLog = document.querySelector('#total-calories');

const calcTotal = (calories, carbs, fat, protein) => {
  totalCalories += calories;
  totalCarbs += carbs;
  totalFat += fat;
  totalProtein += protein;
  totalLog.textContent = `Total calories: ${totalCalories}, carbs: ${totalCarbs}, fat: ${totalFat}, protein: ${totalProtein}`;
};

logOnClick();

//Search for food item oin the existing food list
const inputSearch = document.querySelector('#input-search');

const searchForFood = (foodName) => {
  const foodListItems = document.querySelectorAll('li');
  foodListItems.forEach((item) => {
    if (item.textContent.includes(foodName.toUpperCase())) {
      item.style.display = 'block';
      console.log(`${item.textContent} includes ${foodName}`);
    } else {
      item.style.display = 'none';
    }
  });
  console.log(foodName);
};

inputSearch.addEventListener('keyup', () => {
  searchForFood(inputSearch.value);
});

// EVERYTHING RELATED TO ADDING >>NEW<< FOOD ENTRY

//Post new food to server with name, carbs, protein, fat and calories info
const postNewFood = (carbs, fat, protein, name, calories) => {
  API.post('{0fa8c6aa-bac3-4cd0}', {
    fields: {
      name: {
        stringValue: name,
      },
      carbs: {
        integerValue: carbs,
      },
      protein: {
        integerValue: protein,
      },
      fat: {
        integerValue: fat,
      },
      calories: {
        integerValue: calories,
      },
    },
  });
};

//Open and close modal for Add new food
const openModal = document.querySelector('#btn-modal');
const cancelModal = document.querySelector('#btn-cancel-modal');
const modal = document.querySelector('.modal-container');

openModal.addEventListener('click', () => {
  modal.style.display = 'block';
});

cancelModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

//Add new food item
const btnAddNewFood = document.querySelector('#btn-add-new-food');

btnAddNewFood.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo(0, 0);
  console.log('Button Add is clicked');
  //Select html elements for Add new food form
  const inputName = document
    .querySelector('#input-new-food')
    .value.toLowerCase();
  const inputCarbs = document.querySelector('#input-carbs').value;
  const inputProtein = document.querySelector('#input-protein').value;
  const inputFat = document.querySelector('#input-fat').value;
  const inputCals = document.querySelector('#input-calories').value;
  const output = document.querySelector('.added-food');
  console.log(inputCarbs, inputFat, inputProtein, inputName, inputCals);
  //Display new food that is added under the form
  output.textContent = `Added ${inputName} (carbs: ${inputCarbs}, protein: ${inputProtein}, fat: ${inputFat}, calories: ${inputCals})`;
  //Call post function to send new food info
  postNewFood(inputCarbs, inputFat, inputProtein, inputName, inputCals);
  modal.style.display = 'none';
});
