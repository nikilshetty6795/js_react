"use strict";
console.log("Part 2");

// const calcAverage = (s1, s2, s3) => (s1 + s2 + s3) / 3;

// // const calculateAverage = function () {
// //   return "hello";
// // };

// function checkWinner(avgDolphins, avgKolas) {
//   //   return "winner";
//   if (avgDolphins >= 2 * avgKolas) {
//     return `dolphins win(${avgDolphins} vs ${avgKolas})`;
//   } else if (avgKolas >= 2 * avgDolphins) {
//     return `Kolas win(${avgKolas} vs ${avgDolphins})`;
//   } else {
//     return `No win (${avgKolas} vs ${avgDolphins})`;
//   }
// }

// const avgDolphins = calcAverage(85, 54, 41);
// const avgKolas = calcAverage(23, 34, 27);
// const checkWinnerVal = checkWinner(avgDolphins, avgKolas);
// // console.log(checkWinnerVal);

// function test() {
//   console.log("test1 called");
//   return "hello";
// }

// const test1 = test;
// test();
// // test1("a");

// function previewFile() {
//   console.log("preview file cliced");
//   const preview = document.querySelector("img");
//   const file = document.querySelector("input[type=file]").files[0];
//   console.log("file ", file);
//   const reader = new FileReader();
//   // console.log("reader", reader);

//   reader.addEventListener(
//     "load",
//     () => {
//       // convert image file to base64 string
//       // preview.src = reader.result;
//       console.log("reader result value", reader.result.split(",")[1]);
//     },
//     false
//   );

//   if (file) {
//     reader.readAsDataURL(file);
//   }
// }

// coding challenge 2

// let tip = Number(prompt("Enter the bill amount"));
// // console.log(tip);
// let result = tip >= 50 && tip <= 300 ? (tip * 15) / 100 : (tip * 20) / 100;
// console.log(
//   `the bill was ${tip}, the tip was ${result} and the total value is ${
//     tip + result
//   } `
// );

const bills = [125, 555, 44];
const tips = [];

const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? (bill * 15) / 100 : (bill * 20) / 100;

bills.map((bill) => {
  tips.push(calcTip(bill));
});

console.log(bills);
console.log(tips);
// total bills calculation
const total = [];
for (let i = 0; i < bills.length; i++) {
  let total_bill = bills[i] + tips[i];
  total.push(total_bill);
}

console.log("total bil is ", total);
