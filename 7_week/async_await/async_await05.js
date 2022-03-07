'use strict';

/*
Try to guess the output of the code and then run it to verify your guess.*/

const wait = milliseconds => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, milliseconds);
    });
}

const init = async () => {
    console.log("A");
    await wait(1000);
    console.log("B");
    await wait(1000);
    console.log("C");
}

// Sample usage - do not modify
init();
