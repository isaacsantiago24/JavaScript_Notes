//deletes an element from the array
//deleted element becomes undefined

var fruits = ["banana", "orange", "apple", "mango"];

delete fruits[0];

console.log(fruits); //[empty, "orange", "apple", "mango"]
