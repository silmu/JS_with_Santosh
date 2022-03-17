'use strict';
import Chart from 'chart.js/auto';
import { FetchWrapper } from './fetch-wrapper';

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
      // Save item to array
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
//Save li element to calculate total calories

const logOnClick = () => {
  btnAddSelected.addEventListener('click', () => {
    console.log('Button Add food is clicked');
    for (const el of foodList.children) {
      if (el.classList.contains('active')) {
        console.log('Selected element to add: ' + el.textContent);
        const li2 = document.createElement('li');
        li2.textContent = el.textContent;
        log.appendChild(li2);
        //Remove selection for active food after it's added
        el.classList.remove('active');

        //Recalculate total calories
        calcTotal(el.textContent);
      }
    }
  });
};

logOnClick();

//Total calories
let totalCalories = 0;
let totalProtein = 0;
let totalFat = 0;
let totalCarbs = 0;
let myChart;
let goal = 1200;
const remainingCalories = document.querySelector('.remaining-cals');
const chartContainer = document.querySelector('.container-chart');

//Chart
const ctx = document.getElementById('myChart');

const createChart = () => {
  myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Protein', 'Fat', 'Carbs'],
      datasets: [
        {
          label: 'Nutritional values',
          data: [totalProtein, totalFat, totalCarbs],
          backgroundColor: ['#d45464', '#FFF06C', '#cedd55'],
          hoverOffset: 4,
          cutout: 50,
        },
      ],
    },
  });
};

createChart();

//Calculate total
const calcTotal = (el) => {
  let matches = el.match(/\d+/g);

  totalCarbs += Number(matches[0]);
  totalFat += Number(matches[1]);
  totalProtein += Number(matches[2]);
  totalCalories += Number(matches[3]);
  console.log(
    `Total carbs = ${totalCarbs} Total fat = ${totalFat} Total protein = ${totalProtein} Total calories = ${totalCalories}`
  );
  //Display remaining calories
  remainingCalories.textContent = `${goal} - ${totalCalories} = ${
    goal - totalCalories
  }`;

  //Redraw chart
  chartContainer.style.display = 'block';
  myChart.destroy();
  createChart();
};

//Search for food item in the existing food list
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
  window.scrollTo(0, 0);
  modal.style.display = 'block';
});

cancelModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

//Add new food item
const btnAddNewFood = document.querySelector('#btn-add-new-food');

btnAddNewFood.addEventListener('click', (e) => {
  e.preventDefault();
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

  //Check if any of the values are empty
  let check = 0;
  let values = [inputCarbs, inputFat, inputProtein, inputName, inputCals];
  values.forEach((value) => {
    if (value.length < 1) check++;
  });
  if (check < 0) {
    //Call post function to send new food info
    postNewFood(inputCarbs, inputFat, inputProtein, inputName, inputCals);
    //Display new food that is added under the form
    output.textContent = `Added ${inputName} (carbs: ${inputCarbs}, protein: ${inputProtein}, fat: ${inputFat}, calories: ${inputCals})`;
  } else {
    alert('You have to add all values');
  }
  modal.style.display = 'none';

  //Reload food items list on to display new food entry
  displayFoodList();
});
