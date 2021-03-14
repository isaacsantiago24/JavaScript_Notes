//sort - will modify the original
//1.
const names = ["johnny", "williams", "alex", "david", "luke"];
names.sort();
//sorts my alphabetical order
// ['alex', 'david','johnny','luke','williams]

//2.
const age = [10, 20, 22, 29, 33, 16, 42, 50, 44];
age.sort((a, b) => {
  return a - b;
});
console.log(age);

//if its positive , b will be sorted before a
//if its negative a is sorted before b
//if its 0 then nothing changes

//3.
const games = [
  {
    title: "mass effect",
    rating: 5,
  },
  {
    title: "league of legends",
    rating: 10,
  },
  {
    title: "Madden 18",
    rating: 8,
  },
  {
    title: "NBA 2k21",
    rating: 9,
  },
];

games.sort((a, b) => {
  return a.rating - b.rating;
});

console.log(games);

//orders from descending to ascending ratings.

/////////////////////////////////////////////////////////////////////////
//Exercise 1
const characters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },
];

//1.sort by name
// characters.sort((a, b) => (a.name > b.name) * 2 - 1);

//2. sort by mass

//3.sort by height

////////////////////////////////////////////////////////////////

//Sort will convert them to strings
//Ex: 1
const names = ["Florin", "Dave", "Michael", "Alex"];

names.sort();

console.log(names);

//Ex: 2
// 1. < 0 ... a comes first
// 2. 0 ... nothing will change
// 3. > 0 ... b comes first
const nums = [22, 2222, 203, 54, 334, 54, 433, 6, 10, 4];

nums.sort(compareFunction);

function compareFunction(a, b) {
  return a - b;
}
console.log(nums);

//Ex: 3
const products = [
  {
    name: "laptop",
    price: 1000,
  },
  {
    name: "desktop",
    price: 1500,
  },
  {
    name: "phone",
    price: 500,
  },
];

products.sort((a, b) => {
  return b.price - a.price;
});

console.log(products);
