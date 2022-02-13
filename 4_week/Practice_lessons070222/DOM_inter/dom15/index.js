/**
 * @param {string} name
 */
const setWelcomeMessage = (name) =>
  (document.querySelector('#name').textContent = name);

// Sample usage - do not modify
setWelcomeMessage('Sam');
setWelcomeMessage('<h2>You have been hacked</h2>');
