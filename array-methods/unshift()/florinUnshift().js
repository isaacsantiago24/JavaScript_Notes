//adds 1 or more elements to the beginning of an array
//stores the number
//opposite of the push method

//ex1
const numbers = [1, 2, 3];
numbers.unshift(0);
console.log(numbers); //[0,1,2,3]

//ex2
const nums = [3, 4, 5, 6];

const addedNums = nums.unshift(0, 1, 2);

console.log(addedNums); // 7 numbers are in the array

//ex3
const numb = [5, 66, 20, 32];

const addNumbs = numb.unshift(10, 2, 31);

console.log(numb);
