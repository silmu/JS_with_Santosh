const getName = (name) => {
  return name ?? 'N/A';
};

console.log(getName('Sam')); // 'Sam'
console.log(getName(undefined)); // 'N/A'
console.log(getName(null)); //'N/A'

const getPlaceholder = () => {
  return 'N/A';
};

const sayHello = (name) => {
  return `Hello ${name ?? getPlaceholder()}`;
};

console.log(sayHello('Sam'));
console.log(sayHello(undefined));

const user = {
  id: 1,
  name: 'Sam',
  age: null,
};

console.log(user.age); //null
console.log(user.birthday); //undefined
