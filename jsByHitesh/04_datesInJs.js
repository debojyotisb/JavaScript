// Dates

 let myDate = new Date();
//  console.log(myDate.__proto__); // get all the prototype of date, try in the console.
//  console.log(myDate);
//  console.log(myDate.toString());
//  console.log(myDate.toLocaleString());
// console.log(typeof myDate); // it returns a Object, (Interview question)

// to get any specific date...

let myCreatedDate = new Date(2024, 0, 1); // Year, month, date, hours, minutes, seconds, milliseconds
// console.log(myCreatedDate.toDateString());

let specDate = new Date(2001, 11, 9);
// console.log(specDate.toDateString());

// for the TimeStamp
let myTimeStamp = Date.now();
// console.log(myTimeStamp); // it gives the value in miliseconds.

console.log(Math.floor(Date.now()/1000)); // it gives the value in seconds. means he converts miliseconds to seconds. and Math.floor gives the integer value without decimal. (Interview question)

// Additional example

console.log(myDate.toLocaleString('default', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long'
})); 

