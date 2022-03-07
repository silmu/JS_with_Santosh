'use strict';

/*
Run the code and check how the getRandomNumber function returns a random number between 0 and 9.
The getRandomNumber function is an async function.
Take a look at how we have to resolve the promise in the sample usage to be able to log the value.
*/

const getRandomNumber = async () => {
    // calculates random number between 0 and 9
    const randomNumber = Math.floor(Math.random() * 10);
    return randomNumber;
}

// Sample usage - do not modify
getRandomNumber().then(value => {
    console.log(value);
});
