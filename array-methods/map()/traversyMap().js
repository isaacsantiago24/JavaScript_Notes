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

//Create array of company names

const companyNames = companies.map((company) => {
  return company.name;
});

console.log(companyNames);
