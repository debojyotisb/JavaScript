// **************** Control flow in JS *************

// if, else, else if
// Comparison operators are: ==, ===, !=, !==, >, <, >=, <=
// = means assignment to a variable, == means checking equality of two values, === means checking equality of two values with type strictly.

if (true) {
    // This is condition, if true then this will be executed.
}; // and

if (false) {
    // In this false condition, this will not to be executed.
}
//Example
let temperature = 40;
if ( temperature > 30 ) {
    // console.log("It's hot outside");
} else {
    // console.log("its cool outside");
};


const score = 200;

if (score > 100) {
    let power = "fly"
    // console.log(`hero has ${power} power`); // in every {} create a new scope.
}
// console.log(`hero has ${power} power`); // error, because here in the global scope power is not defined.

// if (score > 100) console.log("test"), console.log("test2"); // if statement can be write in one line also but this is not an good practice.


// nested if else statement
if (score > 100) {
        // console.log("test");
} else if (score > 50) {
    // console.log("test2");
} else if (score > 0) {
    // console.log("test3");
} else {
    // console.log("test4");
};

// && Operator

const userLoggedIn = true;
const userDebitcard = true;
const userLoggedInFromGoogle = false;
const userLoggedInFromEmail = true;


if (userLoggedIn && userDebitcard) {
    // console.log("User can buy something");
}


// Or Operator
if (userLoggedInFromGoogle || userLoggedInFromEmail) {
    // console.log("user logged in");
} else {
    // console.log("Please login"); 
};


