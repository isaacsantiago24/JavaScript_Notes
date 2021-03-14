//creates a new array
//takes 3 parameters (value, index, array)
//test of items of an array
//it doesn't modify the old array

//1. get the even numbers
const numbers = [1, 2, 3, 4, 5, 6];

const even = numbers.filter(isEven);

function isEven(value) {
  return value % 2 === 0;
}

console.log(even); //[2,4,6]

//2.
//remove under 18
const people = [
  {
    name: "Florin",
    age: 26,
  },
  {
    name: "Ivan",
    age: 19,
  },
  {
    name: "James",
    age: 12,
  },
];

const youngPeople = people.filter((person) => person.age >= 18);

console.log(youngPeople); //Florin and Ivan

//remove the duplicates from array
//3.
const numbers = [1, 2, 3, 2, 1, 3, 3, 5, 4, 6];

const nums = numbers.filter((value, index, arr) => {
  return arr.indexOf(value) === index;
});

console.log(nums);
