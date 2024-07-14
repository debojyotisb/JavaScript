const score = 400;
// console.log(score); // it gives a number but

const specNumber = new Number(400.0000); // it gives specific a number, its prototype also a number.
// console.log(specNumber); // specific number
// console.log(specNumber.toString()); // it allow to gives number to string, check this its prototype is also a string.
// console.log(specNumber.toFixed(2)); // it gives 0.00 according to the number u given.

const num = 123.896;
// console.log(num.toPrecision(3)); // give the precise number

const oneLakh = 100000;
// console.log(oneLakh.toLocaleString('en-IN')); // gives you the proper readable presentation.



// **************************************** Maths ************************

// console.log(Math);
// console.log(Math.abs(-5)); // returns negative to positive value only sign.
// console.log(Math.round(4.6)); // round up after decimal it returns 5.
// console.log(Math.ceil(4.2)); // after decimal i can control to print, like its 4.2 but it returns 5, because after decimal of 4 he returns to the top.
// console.log(Math.floor(4.9)); // like its 4.9 but it returns 4, because after decimal of 4 he returns to the lower.

// console.log(Math.random() * 10); // it always gives the value between 0-1. if u need to return between some other number then try this way like Math.random()*10 == its gives the random number between 1.

// console.log(Math.floor(Math.random() * 10) + 1); // for random number between 1-10, and Math.floor gives the integer value without decimal. and +1 is for 1-10.

// Another example

const min = 10;
const max = 20;

// console.log(Math.floor(Math.random() * 10) + min); // or
// console.log(Math.floor(Math.random() * (max - min + 1)) + min); // here max-min+1 is for 10-20, and Math.floor gives the integer value without decimal. and + min is for 10-20.


