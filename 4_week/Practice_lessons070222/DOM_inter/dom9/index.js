const logLinksTexts = () => {
  const links = document.querySelectorAll('a');
  [...links].forEach((link) => console.log(link.textContent));
};

// Sample usage - do not modify
logLinksTexts();
