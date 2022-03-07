'use strict';

/*
For some reason, our init function is broken. It should log Hello World, wait 1 second, and then Hello after 1 second.
Fix it so that the error goes away.*/

// Sample usage - do not modify
const wait = (milliseconds) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, milliseconds);
  });
};

// Fix init function
const init = async () => {
  console.log('Hello World');
  await wait(1000);
  console.log('Hello after 1 second');
};

// Sample usage - do not modify
console.log(init());
