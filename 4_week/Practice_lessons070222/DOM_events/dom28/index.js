// TODO: toggle the class active on my-button when it's clicked
const btn = document.querySelector('#my-button');

btn.addEventListener('click', () => {
  btn.classList.toggle('active');
});
