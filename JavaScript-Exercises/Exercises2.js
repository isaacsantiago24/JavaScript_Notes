//Write a JS program to create a new string from a given string
//taking the first 3 characters and the last 3 characters of a string and
//adding them together. The string length must be 3 or more,
//if not , the original string is returned

const makeNewString = (str) =>
  (str.length < 3 ? str : str.slice(0, 3)) + str.slice(-3);

makeNewString("abc");
makeNewString("abcdef");
makeNewString("abcdsfsdf123");

//write a JS program to extract the first half of a string of even length

const firstHalf = (str) => str.slice(0, str.length / 2);
console.log(firstHalf("temp"));
console.log(firstHalf("temples"));
console.log(firstHalf("temple"));

//write a javascript program to concatenate two strings
//except their first character

const concat = (str1, str2) => str1.slice(1) + str2.slice(1);
console.log(concat("hello", "isaac")); //ellosaac

//Given two values, write a javascript program to find out which is nearest to 100

const near100 = (a, b) => (100 - a < 100 - b ? a : b);

console.log(near100(20, 40));

//Write a JavaScript program to check if a given string contains
//2 to 4 occurrences of a specified character.

const countChars = (str, char) =>
  str.split("").filter((ch) => ch === char).length;

const contains2To4 = (str, char) =>
  countChars(str, char) >= 2 && countChars(str, char) <= 4;

console.log(contains2To4("ooh!", "o"));
console.log(contains2To4("oh!", "o"));
