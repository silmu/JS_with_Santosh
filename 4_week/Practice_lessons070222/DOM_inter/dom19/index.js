const getUserComment = () => document.querySelector('#user-comment').value;

// Sample usage - do not modify
const userComment = document.querySelector('#user-comment');
userComment.addEventListener('keyup', () => {
  console.log(getUserComment());
});
