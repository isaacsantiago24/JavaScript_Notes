//will search the array and return the first element when the call back function returns a truthy value
//if not the it will return Undefined

//Ex1
const names = ["Isaac", "Florin", "Joey", "Alex"];

const res = names.find(findName);

//(item,index,arr)
function findName(name) {
  return (name = "Isaac");
}

console.log(res); //Isaac

//Ex2
const persons = [
  {
    name: "isaac",
    age: 26,
  },
  {
    name: "Joey",
    age: 20,
  },
  {
    name: "jazmine",
    age: 18,
  },
];

const res = persons.find(findPerson).name; //will only return the name isaac without the .name it will return the object

function findPerson(person) {
  return person.name === "isaac";
}

console.log(res);
