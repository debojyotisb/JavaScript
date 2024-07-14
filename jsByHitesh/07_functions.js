// ******* The Heart of JS: Functions *******

function varName () {
    console.log("here is the function Defination");
} // this is the basic function, and for the execution of the function just use function name with ();
// varName(); // reusable variable. Can be use in multiple times for getting the same output.

// Functions with parameters and arguments, Examples..
// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
// };

// addTwoNumbers(3, "a"); // 3a
// addTwoNumbers(3, 4); // 7
// addTwoNumbers(3, null); // 3

function addTwoNumbers(number1, number2) {
    let result = number1 + number2;
    // console.log("Mr Robo's func"); 
    return result;
    console.log("Mr Robo"); // this won't print, because in a function after return keyword nothing will return.
};

const result = addTwoNumbers(3, 5);
// console.log(`This is the Result Value: ${result}`);

function greetingMessage(username) {
    if (username === undefined) {
        console.log("Please enter your username.");
        return
    }
    return `Hello ${username}, welcome again.`
}

console.log(greetingMessage("Mr Robo"));



// ********** Scopes *************

function addOne (value) {
 return value + 1;
}
// console.log(addOne(3));

// Hoisting, when i store the value.


// ************* Arrow Func ************

 const chai = () => {
    let username = "Mr Robo";
    console.log(this.username);
 }

//  console.log(chai());

// Arrow functions different way people write..

// const addTwo = (num1, num2) => num1 + num2; // or
const addTwo = (num1, num2) => (num1 + num2);
// console.log(addTwo(3, 4)); 


// When we pass a object
// const addTwo = (num1, num2) => ({username: "Mr Robo"}); 



// ******************* Immediately Invoked Function Expression (IIFE) **************
// Why we use this IIFE?
// We use IIFE for the immediately execution of a function, not only that moreover sometimes there is global execution pollution and to rid of this pollution we use IIFE function. 


// ()(), first parentheses is a function and 2nd one is for execution. Example

(function immediateRun() { // This is named IIFE, because function name is there.
    // console.log(`This is an IIFE function for immediately execute the function.`);
}) (); // first parentheses is a function definition and second is for execution.

// IIFE in the Arrow function
(() => { //This is non named IIFE.
    // console.log(`This is an example with arrow function.`);
}) (); 

// With parameters and arguments
((name) => {
    // console.log(`This is an example with arrow function ${name}.`);
}) ("Mr Robo"); 



  