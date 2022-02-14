const getIsActiveFromCard = () => {
  const userCard = document.querySelector('#user-card');
  return userCard.dataset.isActive;
};

// Sample usage - do not modify
console.log(getIsActiveFromCard());
