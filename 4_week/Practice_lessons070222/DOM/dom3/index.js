const getArticleTitle = () => document.querySelector('h1').textContent;
// Sample usage - do not modify
console.log(getArticleTitle()); // "First human lands on Mars!"

const getMessage = () => {
  let msg = document.querySelector('#message').value;
  console.log(msg);
};
