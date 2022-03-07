'use strict';

/*
Make the canVote instance method async. The sample usage code should then work as expected.
*/

class User {
  constructor(age) {
    this.age = age;
  }

  async canVote() {
    return this.age >= 18;
  }
}

// Sample usage - do not modify
const user = new User(20);
user.canVote().then((result) => {
  console.log(result); // true
});
