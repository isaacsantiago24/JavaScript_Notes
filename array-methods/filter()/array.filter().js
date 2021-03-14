//filter returns multiple values , where as find only returns the first value

const players = [
  {
    name: "Lebron",
    championships: 4,
  },
  {
    name: "Jordan",
    championships: 6,
  },
  {
    name: "Brady",
    championships: 7,
  },
  {
    name: "Carmelo",
    championships: 0,
  },
];

const filterPlayer = players.filter(function (player) {
  return player.championships > 3;
});

console.log(filterPlayer);
//////////////////////////////////////////////////////////////////////

//exercise
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

//1. Get characters with mass greater than 100

const greaterThan = characters.filter((character) => {
  return character.mass > 100;
});
console.log(greaterThan);

//2. Get characters with height less than 200

const lessThan = characters.filter((char) => {
  return char.height < 200;
});

console.log(lessThan);

//3.Get all male characters
const malePlayers = characters.filter((character) => {
  return character.gender === "male";
});
console.log(malePlayers);

//4. Get all female characters
const femaleCharacters = characters.filter((char) => {
  return char.gender === "female";
});
console.log(femaleCharacters);
