//changes an array by removing or replacing existing elements

//1.
const numbers = [1, 2, 3, 4, 5];

//remove the last 3
//(starting index, how many items will be removed, optional: new items)
const deleted = numbers.splice(2, 3); //starts at index 2 and removes the last 3 of array

console.log(deleted); //[3,4,5]

//2. replacing the last 3 numbers in array

const nums = [1, 2, 3, 4, 5];

const updatedNums = nums.splice(2, 3, 6, 7); //start at index 2 , move the last 3, replace with 6 and 7

console.log(nums); //[1,2,6,7]
