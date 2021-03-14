//allows you to add elements to the end of an array
//it also returns the new length of the array

const numbers = [1, 2, 3];
numbers.push(4);
console.log(numbers); //[1,2,3,4]

const numbers = [1, 2, 3];
const total = numbers.push(4, 5, 6, 7, 8);
console.log(total); //8 which is the length of the array
