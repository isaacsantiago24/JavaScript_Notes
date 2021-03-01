//concat allows you to merge 1 or 2 arrays
//won't change the original arryay

const a = [1, 2, 3];
const b = [4, 5, 6];
const d = [7, 8, 9];

const c = a.concat(b, d);
console.log(c); // [1,2,3,4,5,6]
//[1,2,3,4,5,6,7,8,9]
