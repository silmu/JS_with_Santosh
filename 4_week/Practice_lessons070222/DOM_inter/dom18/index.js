const getSelectedCountry = () =>
  document.querySelector('#countries-dropdown').value;

// Sample usage - do not modify
const dropdown = document.querySelector('#countries-dropdown');
dropdown.addEventListener('change', () => {
  console.log(getSelectedCountry());
});
