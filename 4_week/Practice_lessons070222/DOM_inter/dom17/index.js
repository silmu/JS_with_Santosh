const emptyUserName = () => {
  document.querySelector('#user-name').value = '';
  console.log('Name has been emptied');
};

// Sample usage - do not modify
document.querySelector('#empty-btn').addEventListener('click', () => {
  emptyUserName();
});
