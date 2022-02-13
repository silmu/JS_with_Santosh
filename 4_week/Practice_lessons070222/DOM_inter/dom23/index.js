const btn = document.querySelector('#my-button');

const initGetWeather = () => {
  btn.addEventListener('click', () => {
    btn.textContent = 'Loading...';
    btn.setAttribute('disabled', 'disabled');
  });
};

// Sample usage - do not modify
initGetWeather();
