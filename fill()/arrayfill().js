//fill changes the elements in a array with a provided value
//will affect the original array

//1
const numbers = [1, 4, 22, 345, 323, 30, 89];
numbers.fill(0);
console.log(numbers);

//2
const nums = [10, 54, 122, 5345, 4323, 340, 9];

nums.fill(0, 1, 4); //only will change to 0 but not the index between 1-4
console.log(nums);

//3
function fillInNumbers(n) {
  return Array(n)
    .fill(0)
    .map((_, idx) => idx + 1);
}
console.log(fillInNumbers(10));
