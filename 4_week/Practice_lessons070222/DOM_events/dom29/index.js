// TODO: The user can select a currency by clicking on it (add the class `active`). However, only one currency can be chosen at a time.
const btns = document.querySelectorAll('.card');

btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    btns.forEach((btn) => {
      console.log(btn);
      btn.classList.remove('active');
    });
    e.currentTarget.classList.add('active');
  });
});
