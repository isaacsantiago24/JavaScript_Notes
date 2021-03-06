// //similar to find method
//findIndex will find the element and find the Index

const names = [1, 2, 3, 4, 5];

const res = names.findIndex(findThree);

function findThree(value) {
  return value === 3;
}

console.log(res); //2
