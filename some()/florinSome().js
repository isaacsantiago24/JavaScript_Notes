//takes in a callback function
//if there is a returned value it will return TRUE if not then it will return FALSE

//ex1
const numbers = [1, 2, 3, 4, 5];

const res = numbers.some(greaterThanFour);

//(item,idx,array)
function greaterThanFour(item) {
  return item > 4;
}

console.log(res); // True

//ex2

const persons = [
  {
    name: "isaac",
    age: 21,
  },
  {
    name: "joey",
    age: 10,
  },
  {
    name: "peter",
    age: 22,
  },
];

const res = persons.some(isAdult);

function isAdult(person) {
  return person.age >= 18; //true because 2 of our persons are adult, if they were younger than 18 it would be false
}

console.log(res);
