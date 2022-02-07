const getSelectedCurrency = () => document.querySelector('.active').textContent;

document.querySelectorAll('.cards .card').forEach((card) => {
  card.addEventListener('click', (event) => {
    document.querySelector('.cards .card.active').classList.remove('active');
    event.currentTarget.classList.add('active');
    console.log(getSelectedCurrency());
  });
});
