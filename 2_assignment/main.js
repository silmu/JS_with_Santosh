'use strict';

class FetchWrapper {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async get(endpoint) {
    const response = await fetch(baseURL + '/' + endpoint);
    const data = await response.json();
    console.log(data);
  }
  // get(endpoint) {
  //   return fetch(this.baseURL + endpoint).then((response) => response.json());
  // }

  put(endpoint, body) {
    return this._send('put', endpoint, body);
  }

  post(endpoint, body) {
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
const API = new FetchWrapper(
  'https://firestore.googleapis.com/v1/projects/programmingjs-90a13/databases/(default)/documents/%7b0fa8c6aa-bac3-4cd0%7d'
);

API.get();
