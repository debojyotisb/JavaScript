// ******* Switch Statement *******
// Basic Syntax

/* switch (key) {
    case value:
        
        break;

    default:
        break;
};
*/

// Example
 const month = "3"; // This is the condition case

 switch (month) { // here every case it matches, if it is not match then it print default case.
    case 1:
    // console.log("January");        
        break;
    case 2:
    // console.log("Feb");        
        break;
    case 3:
    // console.log("March");        
        break;
    case 4:
    // console.log("April");        
        break;
 
    default:
        // console.log("Default Case");
        break;
 }





 // Notes or QnA
// ********** Truthy or Falsy values *******

// Falsy values are: false, 0, "", null, undefined, NaN, BigInt 0n,

// Truthy values are: true, " ", [], {}, function(){}, 

const userEmailAsArray = ["mrrobo@google.com"];
if (userEmailAsArray ) {
    // console.log("");
}

// to check array is in empty or not
 if (userEmailAsArray.length == 0) {
//  console.log(" Email is empty");
 } else {
    // console.log(userEmailAsArray);
 }

// to check object is in empty or not

const userMailAsObj = { 
    email: 'mrrobo@google.com',
 };
if (Object.keys(userMailAsObj).length == 0) {
    // console.log("Object is empty");
} else {
    // console.log(userMailAsObj);
}



// Nullish Coalescing Operator (??): null undefined
// example
let val1;
let val2;
let val3;

val1 = 5 ?? 10;
val2 = null ?? 10; // value will return 10.
val3 = undefined ?? 15; // value will return 15.

// console.log(val1, val2, val3);


// Ternary Operator
// condition ? true : false;

const isUserLoggedIn = true;
// const user = isUserLoggedIn ? console.log("Mr. Robo") : console.log("Guest"); // if isUserLoggedIn is true then Mr. Robo will be printed otherwise Guest will be printed.


