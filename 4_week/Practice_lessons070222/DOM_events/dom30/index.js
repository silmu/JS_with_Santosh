// TODO: implement tabs
const tabs = document.querySelectorAll('.tab');

tabs.forEach((tab) => {
  tab.addEventListener('click', (e) => {
    tabs.forEach((tab) => {
      tab.classList.remove('active');
    });
    e.currentTarget.classList.add('active');
  });
});
