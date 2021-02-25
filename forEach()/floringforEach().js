//forEach executes a given function on every element of an array
//takes in a call back function //3 parameters (value, index, array)

const numbers = [1, 2, 3, 4, 5];

numbers.forEach((item, index, arr) => {
  console.log(arr);
});

//calculate the sum of arr
const numbers = [1, 2, 3, 4, 5];

let sum = 0;

numbers.forEach((item) => {
  sum = sum + item;
});

console.log(sum);

//how many times a letter appears in the array
const letters = ["r", "f", "a", "e", "l", "f", "m"];

let count = {};

letters.forEach((item) => {
  if (count[item]) {
    count[item]++;
  } else {
    count[item] = 1;
  }
});
console.log(count); // {r:1, f:2, a: 1 , e:1,l:1,m:1,r:1}
