// Primitive
// when a variable contains:
// -Number
// -String
// -Boolean
// -undefined
// -null
// -Symbol

const age = 28;
const name = "Tyler";
const loading = false;
const user = undefined;
const response = null;
const counter = Symbol("counter");

// Reference
// when a variable contains:
// type Object
// -Object
// -arrays
// -functions

const user = { name: "Tyler" };
const friend = ["joey", "santi", "gabe"];
const doThing = () => ({});
/////////////////////////////////////

let leo = {
  type: "dog",
  name: "leo",
};

let snoop = leo;
snoop.name = "snoop";

console.log(leo.name); //Snoop
console.log(snoop.name); //Snoop

///////////////////////////////////////////////////////////////////

//MAP
//Make an array of numbers that are doubles of the first array

//1. Double each number in the array
array = [2, 5, 20];
const doubleNumbers = array.map((arr) => arr ** 2);
console.log(doubleNumbers);

//2. Take an array of numbers and make them strings
array = [2, 5, 100];
const arrayString = array.map((arr) => arr.toString());
console.log(arrayString);

//3. Capitalize the first letter
const days = ["monday", "tuesday", "wednesday", "sdhashdas"];

const newDays = days.map(
  (day) => day.charAt(0).toUpperCase() + day.substring(1).toLocaleLowerCase()
);

console.log(newDays);

//4. Make an array of strings of the names
function namesOnly(arr) {
  return arr.map((i) => i.name);
}

var res = namesOnly([
  {
    name: "Angelina Jolie",
    age: 80,
  },
  {
    name: "Eric Jones",
    age: 2,
  },
  {
    name: "Paris Hilton",
    age: 5,
  },
  {
    name: "Kayne West",
    age: 16,
  },
  {
    name: "Bob Ziroll",
    age: 100,
  },
]);

console.log(res);
i.age > 18 ? i.name + "can go to The Matrix" : i.name + "is under age!";

//5. Make an array of strings of the names saying whether or not they can go to the Matrix
function makeStrings(arr) {
  return arr.map((person) =>
    person.age > 18
      ? person.name + " can go to The Matrix"
      : person.name + " is under age!"
  );
}

const strings = makeStrings([
  {
    name: "Angelina Jolie",
    age: 80,
  },
  {
    name: "Eric Jones",
    age: 2,
  },
  {
    name: "Paris Hilton",
    age: 5,
  },
  {
    name: "Kayne West",
    age: 16,
  },
  {
    name: "Bob Ziroll",
    age: 100,
  },
]);
console.log(strings);
// ["Angelina Jolie can go to The Matrix",
// "Eric Jones is under age!!",
// "Paris Hilton is under age!!",
// "Kayne West is under age!!",
// "Bob Ziroll can go to The Matrix"]

//6. Make an array of the names in h1s, and the ages in h2s
function readyToPutInTheDOM(arr) {
  return arr.map(function (obj) {
    return "<h1>" + obj.name + "</h1>" + "<h2>" + obj.age + "</h2>";
  });
}

const list = readyToPutInTheDOM([
  {
    name: "Angelina Jolie",
    age: 80,
  },
  {
    name: "Eric Jones",
    age: 2,
  },
  {
    name: "Paris Hilton",
    age: 5,
  },
  {
    name: "Kayne West",
    age: 16,
  },
  {
    name: "Bob Ziroll",
    age: 100,
  },
]);
console.log(list);
// ["<h1>Angelina Jolie</h1><h2>80</h2>",
// "<h1>Eric Jones</h1><h2>2</h2>",
// "<h1>Paris Hilton</h1><h2>5</h2>",
// "<h1>Kayne West</h1><h2>16</h2>",
// "<h1>Bob Ziroll</h1><h2>100</h2>"]

///////////////////////////////////////////////////////////////////
//EXERCISE 2
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

//1. Get an array of all names
const allNames = characters.map((character) => {
  return character.name;
});

console.log(allNames);

//2. Get an array of all heights

const allHeights = characters.map((char) => "height is " + char.height);
console.log(allHeights);

//3.Get an array of objects with just name and height properties
const nameHeight = characters.map((char) => {
  return `character name is: ${char.name} , their height is: ${char.height}`;
});

console.log(nameHeight);

//4. Get an array of all first names
const firstName = characters.map((person) => {
  return person.name.split(" ")[0];
});

console.log(firstName);
