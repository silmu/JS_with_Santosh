let text = 'This is a string';
console.log(text.toLowerCase());
console.log(text.toUpperCase());

//accessing characters
let str = 'JavaScript';
console.log(str[0]);
console.log(str[1]);
console.log(str[str.length]);
console.log(str[str.length - 1]);
console.log(str[str.length - 2]);

console.log(str.substring(1));
console.log(str.substring(1, 4));
console.log(str.substr(1, 4));//substr is deprecated

let prefix = 'Mrs.';
let firstName = 'Sam';
let string = prefix + ' ' + firstName; 
console.log(string);

console.log('Hello' + 'World');

//string concatenation
let city = 'Helsinki';
let street = 'Plasinpellonkuja';
console.log(city + ' ' + street);

//+= operator
let address = city;
address += ' ';
address += street;
console.log(address);

console.log(`I am learning ${str}.`);

let multiline = `This is a multiline
string that
just works!`
console.log(multiline);

let number = 42;
console.log(number.toString());

let num = 'abc'* 9;
console.log(num); //Gives NaN

let num2 = '5';
console.log(Number.parseInt(num2, 10));

let num3 = 11;
let num4 = '12';
let sum = num3 + num4;
console.log(sum);

let remainder = number % num3;
let division = number / num3;
console.log('Remainder: ' + remainder + '. Division: ' + division + '.');  
