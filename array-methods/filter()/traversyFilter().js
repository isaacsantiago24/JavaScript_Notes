//filter out things from an array
const companies = [
  {
    name: "Company One",
    category: "finance",
    start: 1981,
    end: 2003,
  },
  {
    name: "Company Two",
    category: "retail",
    start: 1999,
    end: 2001,
  },
  {
    name: "Company Three",
    category: "Auto",
    start: 1940,
    end: 1999,
  },
  {
    name: "Company Four",
    category: "Retail",
    start: 1991,
    end: 2010,
  },
  {
    name: "Company Five",
    category: "tech",
    start: 1900,
    end: 2000,
  },
];

const ages = [22, 33, 42, 21, 9, 10, 19, 21, 52];

//for loop
// let canDrink = [];
// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] >= 21) {
//     canDrink.push(ages[i]);
//   }
// }
// console.log(canDrink);

//filter
// const canDrink = ages.filter((age) => {
//   if (age >= 21) {
//     return true;
//   }
// });

// console.log(canDrink);

//filter
const retailCompany = companies.filter((company) => {
  if (company.category === "retail") {
    return true;
  }
});

console.log(retailCompany);
