//creates a shallow copy of the array from an array like or iterable object

//Ex1
//convert string of numbers to a array of numbers

const str = "12345678";

const res = Array.from(str, mapFn);

function mapFn(x) {
  return Number(x); //converts it to number [1,2,3,4,5,6,7]
}

console.log(res); //["1", "2", "3", "4", "5", "6", "7"

//ex2
//remove duplicate values form array

const numbers = [1, 1, 1, 2, 3, 4, 4, 4, 4, 5, 6];

const res = Array.from(new Set(numbers));

console.log(res);
//[1, 2, 3, 4, 5, 6];
