// TODO: when the user clicks on '#menu-sidebar' => toggle the class 'show' on '#app-sidebar'
const btn = document.querySelector('#menu-sidebar');
btn.addEventListener('click', () => {
  document.querySelector('#app-sidebar').classList.toggle('show');
});
