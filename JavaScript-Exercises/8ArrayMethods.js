const items = [
  {
    name: "Bike",
    price: 100,
  },
  {
    name: "Tv",
    price: 200,
  },
  {
    name: "Album",
    price: 10,
  },
  {
    name: "Book",
    price: 5,
  },
  {
    name: "Phone",
    price: 500,
  },
  {
    name: "Computer",
    price: 1000,
  },
  {
    name: "Keyboard",
    price: 25,
  },
  {
    name: "Phone",
    price: 200005,
  },
];

//filter
//doesn't change the original array
//filter everything that is not 100
//return a true or false
//if true its in the new array
//if false its not in the array

const filteredItems = items.filter((item) => {
  return item.price !== 100;
});

console.log(filteredItems);

//map
//allows you to take an array to create a new array

const mapItem = items.map((item) => {
  return item.name;
});

console.log(mapItem);

//find
//returns 1 element from the array
//true or false
//returns the FIRST TRUE

const foundItem = items.find((item) => {
  return item.name === "Phone";
});

// console.log(foundItem);

//forEach
//doesn't actually return anything
//no return statement
//just prints
//loop through it

items.forEach((item) => {
  console.log(item.name);
});

//some
//will return true or false
//check if the price is less than $100
//"any" is there any items less than $100 yes

const hasInexpensiveItems = items.some((item) => {
  return item.price <= 100;
});
console.log(hasInexpensiveItems); //true bc it does has items less than $100

//every
//similar to some but
//it checks all the items
const hasInexpensiveItems = items.every((item) => {
  return item.price <= 100;
});
console.log(hasInexpensiveItems); //false bc every item is not all under 100

//reduce
//different from all
//returns a combination of all operations
//takes in a item AND a property

const total = items.reduce((currentTotal, item) => {
  return item.price + currentTotal;
}, 0);

console.log(total);

//it runs a function, first method is the first iteration and second parameter is the item

//include
//doesn't take a function
//just takes an argument
//returns true or false

const items = [1, 2, 3, 4, 5];

const includesTwo = items.includes(2);

console.log(includesTwo); //true
