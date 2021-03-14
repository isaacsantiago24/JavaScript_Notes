// creates a new string from an array

//ex1
const countries = ["Romania", "USA", "India"];

const res = countries.join();

console.log(res); //Romania, USA, India

//ex2
const countries = ["Romania", "USA", "India"];

const res = countries.join(" - "); //Romania - USA - India

console.log(res);

//ex3
const countries = ["Romania", "USA", "India"];

const res = countries.join(""); //RomaniaUSAIndia

console.log(res);

//ex4
const countries = ["Romania", "USA", "India"];

const res = countries.join(","); //RomaniaUSAIndia

console.log("I want to visit " + res);
