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

//%7b is { %7d is }. The code between is random id
//Current endpoint: %7b0fa8c6aa-bac3-4cd0%7d
//{0fa8c6aa-bac3-4cd0}
const API = new FetchWrapper(
  'https://firestore.googleapis.com/v1/projects/programmingjs-90a13/databases/(default)/documents/'
);

const foodList = document.querySelector('.food-list');

//Fetch all food items
const displayFoodList = () => {
  API.get('{0fa8c6aa-bac3-4cd0}').then((data) => {
    data.documents.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = `${item.fields.name.stringValue.toUpperCase()} - carbs: ${
        item.fields.carbs.integerValue
      }, fat: ${item.fields.fat.integerValue}, protein: ${
        item.fields.protein.integerValue
      }, calories: ${item.fields.calories.integerValue}`;
      foodList.appendChild(li);
    });
  });
};

//Display food items list on load
displayFoodList();

//Search for food item oin the existing food list
const inputSearch = document.querySelector('#input-search');

const searchForFood = (foodName) => {
  const foodListItems = document.querySelectorAll('li');
  foodListItems.forEach((item) => {
    if (item.textContent.includes(foodName.toUpperCase())) {
      item.style.display = 'inline-block';
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

//Add new food item
const btnAddNewFood = document.querySelector('#btn-add-new-food');

btnAddNewFood.addEventListener('click', (e) => {
  e.preventDefault();
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
});
