//you can reverse an array
//this changes the original array

//Ex1 this changes the original array
const numbers = [1, 2, 3, 4, 5];

numbers.reverse();

console.log(numbers); //[5,4,3,2,1]

//Ex2 this doesnt change the original
const numbers = [1, 2, 3];
const newArr = numbers.concat().reverse();

console.log(numbers); //[1,2,3,4,5]
console.log(newArr); //[5,4,3,2,1]

//Or use the spread operator

const numbers = [1, 2, 3, 4, 5];

const newArray = [...numbers].reverse();

console.log(numbers); // [1,2,3,4,5]
console.log(newArray); //[5,4,3,2,1]

//reverse characters in a string
const str = "Coding is fun!";

const result = str.split("").reverse().join("");

console.log(result); //!nuf si gnidoC
