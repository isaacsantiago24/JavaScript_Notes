// use it to add all ages together

const ages = [22, 33, 42, 21, 9, 10, 19, 21, 52];

//for loop
// let ageSum = 0;
// for (let i = 0; i < ages.length; i++) {
//   ageSum += ages[i];
// }

const ageSum = ages.reduce((total, age) => {
  return total + age;
}, 0);

console.log(ageSum);
