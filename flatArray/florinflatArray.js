//creates a new array with all sub arrays concatinated into it

const arr = [1, [2, [3, [4]]]];

const res = arr.flat(3); //Infinity will work for all unlimited arrays

console.log(res); //[1,2,3,4]
