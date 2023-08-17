console.log("Higher order functions");
function a(fn) {
  console.log("Inside function definition", fn);
  fn(10);
}

function l(a) {
  console.log("inside function invoke", a);
}
// a(l);

const nameVal = {
  firstName: "Nikil",
  lastName: "Shetty",
};

console.log(nameVal);
const { firstName: fname, lastName: lname } = nameVal;
console.log(fname);
console.log(lname);
