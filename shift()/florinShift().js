//removes the first element from the array and returns it
//opposite of pop()

//ex1
const numbers = [1, 2, 3, 4];

numbers.shift();

console.log(numbers); //[2,3,4]

//ex2 stores it
const numbers = [1, 2, 3, 4];

const savedNums = numbers.shift();

console.log(savedNums); //1
