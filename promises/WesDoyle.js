//A promise can be in one of three states:

//-Pending | hasn't settled to a value yet
//-Fulfilled | settled successfully (calling resolve())
//-Rejected | settled unsucessfully (calling reject())

let fetchSomeData = new Promise((resolve, reject) => {});
