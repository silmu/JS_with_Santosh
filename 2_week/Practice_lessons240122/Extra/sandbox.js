function cost(total) {
  let array = total.split(' ');
  let A = Number(array[0]);
  let B = Number(array[1]);
  let C = Number(array[2]);
  let D = Number(array[3]);
  let E = A + (D - B) * C;
  return E;
}
console.log(cost('23 24 25 2'));
