// Sample array of employee objects
const employees = [
  { id: 1, name: "Alice" },
  { name: "Bob" },
  { id: 3, name: "Charlie" },
];

// ID you want to check against
var idToFind = 2;

// Using map to iterate over the array and check for the condition
// const foundEmployee = employees.find((emp) => emp.id === idToFind);
// console.log(foundEmployee);

// // Check if an employee with the specified ID was found
// if (foundEmployee) {
//   console.log("Employee found:", foundEmployee);
// } else {
//   console.log("Employee not found");
// }

// const foundEmployee2 = employees.filter((emp) =>
//   emp.id === idToFind ? emp : " "
// );
// console.log(foundEmployee2);

//map
const emap = employees.map((emp) => (emp.id ? emp.id : ""));
console.log(emap);

const emap2 = employees.map((emp) => emp.id);
console.log(emap2);
