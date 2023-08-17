let markWeight1 = 78;
let markHeight1 = 1.69;

let johnWeight1 = 92;
let johnHeight1 = 1.95;

let markWeight2 = 95;
let markHeight2 = 1.88;

let johnWeight2 = 85;
let johnHeight2 = 1.76;

calculateBMI = (height, weight) => height / weight ** 2;

// data 1 bmi
let markBMI1 = calculateBMI(markWeight1, markHeight1);
console.log(markBMI1);

let johnBMI1 = calculateBMI(johnWeight1, johnHeight1);
console.log(johnBMI1);

let markHigherBMI1 = markBMI1 > johnBMI1;
console.log(markHigherBMI1);

//data 2 bmi
let markBMI2 = calculateBMI(markWeight2, markHeight2);
console.log(markBMI2);

let johnBMI2 = calculateBMI(johnWeight2, johnHeight2);
console.log(johnBMI2);

let markHigherBMI2 = markBMI2 > johnBMI2;
console.log(markHigherBMI2);
