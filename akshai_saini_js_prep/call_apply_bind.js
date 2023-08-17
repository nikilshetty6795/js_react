console.log("call apply bind");
let name = {
  firstName: "Nikil",
  lastName: "Shetty",
  age: 28,
};

let name2 = {
  firstName: "Akshay",
  lastName: "Saini",
};

let printFullName = function (hometown, state) {
  console.log(
    `fullName is ${this.firstName} ${this.lastName} and age is ${this.age} from ${hometown} ${state}`
  );
};

//function borrowing is a process of borrowing functions from other objects and use it with the data of other objects
// name.printFullName.call(name2);

printFullName.call(name, "Harihar", "karnataka");
printFullName.call(name2, "Deharadun", "UttarPradesh");

// apply method

// only difference between call and apply method is the way values are passed into function
// values are passed in the list
console.log("Apply method");
printFullName.apply(name, ["Harihar", "karnataka"]);
printFullName.apply(name2, ["Deharadun", "UttarPradesh"]);

// BIND METHOD
// bind method binds printfullname with the object (name) and return the copy of the method which can be used later purose
console.log("BIND METHOD");
let printMyName = printFullName.bind(name, "Harihar", "karnataka");
printMyName();
