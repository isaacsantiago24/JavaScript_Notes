//i promise to do something ....has 2 results resolved or failed

let p = new Promise((resolve, reject) => {
  //what the promise is
  let a = 1 + 1;
  if (a == 2) {
    resolve("success");
  } else {
    reject("Failed");
  }
});

//anything inside a .then then will run a RESOLVE
//.catch will run any reject

//resolves
p.then((message) => {
  console.log("this is in the then " + message);

  //reject or fails
}).catch((message) => {
  console.log("this is in the catch" + message);
});
