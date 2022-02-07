const getSelectedCurrencies = () => {
  const arr = [...document.querySelectorAll('.active')];
  return arr.map((el) => el.textContent);
};
// Sample usage - do not modify
document.querySelectorAll('.cards .card').forEach((card) => {
  card.addEventListener('click', (event) => {
    event.currentTarget.classList.toggle('active');
    console.log(getSelectedCurrencies());
  });
});
