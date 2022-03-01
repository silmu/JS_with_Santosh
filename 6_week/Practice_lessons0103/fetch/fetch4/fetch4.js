'use strict';

class FetchWrapper {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  get(endpoint) {
    return fetch(this.baseURL + endpoint).then((response) => response.json());
  }
}

/*
Complete the checkForNewNotifications function such that it makes a fetch request to https://programmingjs-90a13-default-rtdb.europe-west1.firebasedatabase.app/notifications.json  
and return its result. Also, visualize that the result of fetch is a Promise. You should see Promise in the console.
*/
const API = new FetchWrapper(
  'https://programmingjs-90a13-default-rtdb.europe-west1.firebasedatabase.app/'
);

const checkForNewNotifications = () =>
  API.get('notifications.json').then((data) => console.log(data));
const getChapters = () => API.get('chapters.json');

const displayCompletedChapters = () =>
  getChapters().then((data) =>
    data.filter((chapter) => (chapter.isCompleted ? chapter : false))
  );

console.log(getChapters());
console.log(displayCompletedChapters());
