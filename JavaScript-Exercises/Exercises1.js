//Ex1
//Write a JavaScript program to check two numbers and return
//true if one of the number is 100 or if the sum of the two numbers is 100

const isEqualTo100 = (a, b) => a === 100 || b === 100 || a + b === 100;

console.log();

console.log(isEqualTo100(100, 0)); //true
console.log(isEqualTo100(0, 100)); //true
console.log(isEqualTo100(10, 90));

//Ex2
//Write a JavaScript program to get the extension of a filename
const getFileExtension = (str) => str.slice(str.lastIndexOf("."));

console.log(getFileExtension("index.html"));

//Ex3
//Write a JavaScript program to replace every character
//in a given string with the character following it in the alphabet

//built in functions
//String.fromCharCode
//charCodeAt

const moveCharsForward = (string) =>
  string
    .split("")
    .map((char) => String.fromCharCode(char.charCodeAt(0) + 1))
    .join("");

console.log(moveCharsForward("abcd"));

//Ex4
//Write a JavaScript program to get the current date.
//Expected: mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

const formatDate = (date = new Date()) => {
  const days = date.getDate() + 1;
  const months = date.getMonth() + 1;
  const years = date.getFullYear();

  return `${days}/${months}/${years}`;
};
console.log(formatDate());

//Ex5

//Write a JS program to create a new string adding "New!" in front of a given string.
//If the given string begins with "New!" already then return the original string

//offer the it should be New! offer

const addNew = (str) => (str.lastIndexOf("New!") === 0 ? str : `New! ${str}`);

console.log(addNew("New! Offers"));
