//returns a new array
//map takes in the (current value, index, array)
//multiply all numbers
const numbers = [1, 2, 3, 4, 5];

// const numberDouble = numbers.map(double);
const multiplyNum = numbers.map(multiply);

//callback function
function double(value, index, arr) {
  return value * 2;
} //[,2,4,6,8,10]

//mult value by the index
function multiply(value, index, arr) {
  return value * index;
}
console.log(multiplyNum); // [0,2,6,12,20]
//////////////////////////////////////////////////////////////

//2.
const products = [
  {
    name: "laptop",
    price: 1000,
    count: 5,
  },
  {
    name: "desktop",
    price: 1500,
    count: 2,
  },
  {
    name: "phone",
    price: 500,
    count: 10,
  },
];

const totalProductsValue = products.map((product) => ({
  name: product.name,
  totalvalue: product.price * product.count,
}));

console.log(totalProductsValue); //[5000, 3000, 5000]

//3.
//convert to an array of numbers
const strings = ["1", "2", "3", "4", "5"];

const numbers = strings.map(Number);
console.log(numbers); // [1,2,3,4,5]
