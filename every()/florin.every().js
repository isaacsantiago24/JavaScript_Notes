//executes a given function on every item of an array and
//returns true only if all is true if not then will return false

//ex1
const nums = [1, 2, 3, 4, 5];

const res = nums.every(isPositive);

// function isPositive(item,index,arr)
function isPositive(item) {
  return item > 0;
}

console.log(res); //true

//ex2

const persons = [
  {
    name: "Florin",
  },
  {
    name: "Ivan",
  },
  {
    name: "Lee",
  },
  {
    surname: "Joey",
  },
];

const test = persons.every((person) => person.name !== undefined);

console.log(test); //false

//ex 3
const arrays = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const res = arrays.every((arr) => Array.isArray(arr));

console.log(res);
