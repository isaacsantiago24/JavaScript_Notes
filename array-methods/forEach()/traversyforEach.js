//doesn't return like a for loop

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

// const ages = [22, 33, 42, 21, 9, 10, 19, 21, 52];

//compare to for loop

// for (let i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
// }

//forEach

companies.forEach((company) => {
  console.log(company.name);
});

///////////////////////////////////////////////////////////////////////
const days = ["mon", "tues", "wed", "thurs", "fri", "sat"];

//get access to all of them
days.forEach((day, idx) => {
  console.log(`today is ${day} and has an index of ${idx}`);
});
