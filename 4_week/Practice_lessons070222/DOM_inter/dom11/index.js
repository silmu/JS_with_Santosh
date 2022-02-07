const getShortTextParagraphs = () => {
  const arr = document.querySelectorAll('p');
  return [...arr].filter((p) =>
    p === null ? false : p.textContent.length < 10
  );
};

// Sample usage - do not modify
console.log(getShortTextParagraphs());
