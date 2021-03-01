//returns a shallow copy of a portion of an array
//it wont modify the original
//1.
const numbers = [1, 2, 3, 4, 5];

const numbers2 = numbers.slice(1, 4);

console.log(numbers2); //[2,3,4] (1 is included, 4 is not included)

//if you do not pass anything to slice slice() you just get a shallow copy

//2.
const numbers = [1, 2, 3, 4, 5];

const numbers2 = numbers.slice(-3);

console.log(numbers2); // [3,4,5] the last 3 numbers of the array

//3.
const numbers = [1, 2, 3, 4, 5];

const numbers2 = numbers.slice(2);

console.log(numbers2); // [3,4,5] you get all the index starting at index 1

//4.
const participants = ["joey", "kells", "chris", "bobby", "alex"];

const winners = participants.slice(0, 3); // the second index(3) is not included . stops 1 before

console.log(winners); //["joey", "kells", "chris"]
