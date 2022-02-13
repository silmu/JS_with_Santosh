// TODO: clicking on 'Toggle dark mode' should add/remove 'dark' class on <html>
let btn = document.querySelector('#theme-btn');

btn.addEventListener('click', (e) => {
  document.querySelector('html').classList.toggle('dark');
});
