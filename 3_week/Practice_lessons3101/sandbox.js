const createCircle = (radius) => {
  const circle = {
    area: Math.PI * radius * radius,
    circumference: 2 * Math.PI * radius,
  };
  return circle;
};
const circle = createCircle(3);
console.log(circle.area);
console.log(circle.circumference);
