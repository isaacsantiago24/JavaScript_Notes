// indexOf() returns the first index in which the given element can be found in the array
// lastIndexOf() starts from the end of the array

const names = ["Florin", "Isaac", "Gabe", "Liam", "george"];

console.log(names.indexOf("Isaac")); //1

//ex1
const names = ["Florin", "Isaac", "Gabe", "Jake"];

const idx = names.indexOf("Isaac");

names[idx] = "Jay";

console.log(names); //["Florin", "Jay", "Gabe"]

//ex2
const names = ["Florin", "Isaac", "Gabe"];

const idx = names.indexOf("Isaac"); //if its not in the array it will return -1

if (idx > -1) {
  console.log("yay isaac is in the array");
} else {
  console.log("sadly isaac is not in the array");
}
//yay isaac is in the array

//ex3 lastindexOf()

const names = ["mike", "lee", "james", "lee", "tyler"];

const idx = names.lastIndexOf("lee");

console.log(idx); // 3
