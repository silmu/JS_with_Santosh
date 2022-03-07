/* Sample usage do not modify */
class FetchWrapper {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  get(endpoint) {
    return fetch(this.baseURL + endpoint).then((response) => response.json());
  }

  put(endpoint, body) {
    return this._send('put', endpoint, body);
  }

  post(endpoint, body) {
    return this._send('post', endpoint, body);
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

const startLoader = (element) => {
  element.innerHTML = `<div class="loading-spinner"></div>`;
};

const stopLoader = (element, value) => {
  element.textContent = value;
};

/* In this mini-project, you will build a page that uses the GitHub API to list the repositories of a GitHub user.
This project does not require you to log in and authenticate with the GitHub API.
However, the API has a limit of 60 requests per minute.
So, if you get an error saying: You have triggered an abuse detection mechanism.
Please wait a few minutes before you try again., then you should wait about one minute before trying again.

The goal of this project is to allow the user to enter a GitHub username (for example,
kalwar or yourgithubusername), and then when the user submits the form,
the app will show the list of GitHub repositories for that user using the GitHub API. */

/* Write your code here... */

const btn = document.querySelector('#get-repos');
const output = document.querySelector('#repos-list');

btn.addEventListener('click', (e) => {
  const input = document.querySelector('#github-username').value;
  console.log(input);
  e.preventDefault();
  const API = new FetchWrapper('https://api.github.com/users/');
  API.get(`${input}/repos`).then((data) => {
    console.log(data);
    printRepos(data);
  });
});

const printRepos = (data) => {
  const li = document.createElement('li');
  data.forEach((repo) => {
    console.log('Repo:' + repo);
    output.insertAdjacentHTML(
      'beforeend',
      `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`
    );
  });
};
