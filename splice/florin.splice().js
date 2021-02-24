//changes an array by removing or replacing existing elements

const numbers = [1, 2, 3, 4, 5];

//remove the last 3
//(starting index, how many items will be removed, optional: new items)
const deleted = numbers.splice(2, 3);

console.log(deleted);
