const user = {
  details: {
    firstName: 'Sam',
  },
  data: null,
};

console.log(user.details?.firstName);
console.log(user.data?.id);
console.log(user.children?.names);
console.log(user.details?.parent?.firstName);
