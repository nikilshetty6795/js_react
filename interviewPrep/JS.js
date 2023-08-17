// a = 1;
// console.log(a);
// var a;

// function test() {
//   let b = 20;
//   console.log("aasasas", b);
//   function test1() {
//     let b = 35;
//     console.log("testq1", b);
//     var a = 30;
//     console.log("testastas", a);
//   }
//   test1();
//   //   console.log("end a ", a);
//   console.log("end a ", b);
// }
// test();

// var a = 10;
// {
//   var a = -10;
// }
// let b = a;
// {
//   let b = -20;
// }

// console.log(b);

// let x = 10;
// console.log(x);
// let y = x;
// console.log("1st y", y);
// y = 20;
// console.log("2nd y", y);
// console.log(x);

// let names = { name: "Nikil", lastName: "Shetty" };
// console.log(names);
// let n = names;
// console.log(n);
// n.name = "NIKIL";
// console.log(n);
// console.log(names);

function parent() {
  let name = "nikil";
  function child() {
    console.log("inside child 1x", name);
    var name = "shetty";
    console.log("inside child", name);
  }
  child();
  console.log("outside child", name);
}

// parent();

function doSomething() {
  console.log(this);
}

// doSomething();

var obj = {
  name: "vivek",
  getName: function () {
    console.log(this.name);
  },
};

// obj.getName();

// closures in js

function x() {
  let a = 10;
  function y() {
    console.log(a);
  }
  return y;
}

// let z = x();
// z();

// function currying
// let multiply = function (x, y) {
//   console.log(x * y);
// };

// let multiplyby2 = multiply.bind(this, 2);
// multiplyby2(3);

// currying using closures
function multiply(a, b) {
  return a * b;
}
function currying(fn) {
  return function (a) {
    return function (b) {
      return fn(a, b);
    };
  };
}
var curriedMultiply = currying(multiply);
console.log(curriedMultiply);

// multiply(4, 3); // Returns 12

// console.log(curriedMultiply(4)(3)); // Also returns 12

function addAllArgs(...args) {
  let sumOfArgs = 0;
  let i = 0;
  console.log(args);
  while (i < args.length) {
    sumOfArgs += args[i];
    i++;
  }
  return sumOfArgs;
}

// addAllArgs(6, 5, 7, 99); // Returns 117
// addAllArgs(1, 3, 4); // Returns 8

// lexical scoping
var scope = "global scope";
function check() {
  var scope = "local scope";
  function f() {
    // console.log("dqwdqwd");
    return scope;
  }
  return f;
}

let xa = check();
console.log(xa());

// function func1() {
//   setTimeout(() => {
//     console.log(x);
//     console.log(y);
//   }, 3000);

//   var x = 2;
//   let y = 12;
// }
// func1();

// (function () {
//   setTimeout(() => console.log(1), 2000);
//   console.log(2);
//   setTimeout(() => console.log(3), 0);
//   console.log(4);
// })();

function func2() {
  for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 2000);
  }
}
// func2();

let x = {},
  y = { name: "Ronny" },
  z = { name: "John" };
x[y] = { name: "Vivek" };
x[z] = { name: "Akki" };
console.log(x[y]);

function bigFunc(element) {
  let newArray = new Array(700).fill("♥");
  //   console.log(newArray)
  //   console.log(newArray[element])
  return newArray[element];
}

// console.log(bigFunc(500))

function bigFunc1() {
  let newArray = new Array(700).fill("♥");
  return (element) => newArray[element];
}

let getFunc = bigFunc1();
// console.log(getFunc)

function randomFunc() {
  for (let i = 0; i < 2; i++) {
    console.log("yeey", i);
    setTimeout(() => console.log(i), 1000);
  }
  //   console.log("ooosdw",i)
}
// randomFunc();

var firstWord = "Deepak";
var secondWord = "Aman";

function isAnagram(one, two) {
  //Change both words to lowercase for case insensitivity..
  var a = one.toLowerCase();
  var b = two.toLowerCase();
  console.log(a, b);

  // Sort the strings, then combine the array to a string. Examine the outcomes.
  a = a.split("").sort().join("");
  console.log(a);
  b = b.split("").sort().join("");
  console.log(b);

  return a === b;
}

console.log(isAnagram(firstWord, secondWord)); // true

// count the number of each vowels in the string
const checCountVowels = (str) => {
  let vowels = { a: 0, e: 0, i: 0, o: 0, u: 0 };
  let newStr = str.toLowerCase();
  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i] in vowels) {
      console.log("agga", vowels[newStr[i]]);
      vowels[newStr[i]] = vowels[newStr[i]] + 1;
      console.log(vowels[newStr[i]]);
    }
  }
  return vowels;
};
console.log(checCountVowels("Hello world"));
