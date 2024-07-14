// var displayHello = 'Hello World';
// console.log('Displaying', displayHello);






// var email = false;
// var facebook = false;
// var google = false;

// if (email ||  facebook || google) {
//     console.log('Login Success')
// } else {
//     console.log('You are not allow to login')
// }

// var authenticate = false;
// authenticate ? console.log('Sign Out') : console.log("Log In");


// // create multiple conditional statement
// // admin = Allow full access
// // sub-admin = access to create or delete
// // test-prep = access to create or delete tests
// // user = access to consume

// var user = "admin";
// switch (user) {
//     case "admin":
//         console.log("Allow full Access");
//         break;
//     case "sub-admin":
//         console.log("access to create or delete");
//         break;
//     case "test-prep":
//         console.log("access to create or delete tests");
//         break;
//     case "user":
//         console.log("access to consume");
//         break;
    

//     default:
//         console.log(" Please Register or Sign in")
//         break;
// }


// //loops
// for (let i = 1; i<= 30; i++) {
//     console.log("magic spell #" + i);
// }


// //function
// function castSpell(name) {
//     // return "Hello World"
//     console.log(`Hello ${name}`);
// }
// castSpell('Sonu')
// castSpell('Jab')



//  function num (a) {
//     var incrementNum = a;
//     for( i = a; i >= 1; i++) {
//         console.log(i)
//     }
//     console.log("increment console", incrementNum)
//  }

//  num(1);


//Scope Chain
//remember the example of ice-cream, that can be only take from parents and grand parents..
//example here

// var myName = "Sonu";
// console.log("Line No. 78", myName);

// function sayMe() {
//     // var myName = "Mr. D";
//     console.log("Line No. 82", myName);

//     function sayMeToo() {
//         // var myName = "Mr. SB"
//         console.log("Line No. 85", myName)
//     }
//     sayMeToo();
// }
// sayMe();

// //Array
// var arr = ["Sonu", "suklabaidya.dev", 29, true];
// console.log("01", arr.unshift("Jab"));
// console.log("02", arr);
// arr[0] = "jam"
// console.log("03", arr);
// console.log("04", Array.from("sonu"));


// //Even of False
// function isEven(element) {
//     // if (element % 2 === 0) {
//     //     return true
//     // }
//     // return false;
//     return element % 2 === 0;
// }
// //another method using this every()
// //this every method checks every element of the array, and shows the result
// // var result = [3, 1, 7].every(isEven);
// var result = [4, 6, 8].every((e) => (e %2 === 0));

// console.log(result);

// //filter
// const myNumber = [23, 43, 45, 7, 98, 32, 23];
// const result = myNumber.filter((num) => num >= 40)
// console.log(result)

//  //object
//  var obj = {
//     firstName : "Debojyoti",
//     lastName : "Suklabaidya",
//     loginCount: 25,
//     isLoggedIn : true
//  }
//  console.log(obj);
//  console.table(obj);


//  var obj = {
//     firstName : "Debojyoti",
//     lastName : "Suklabaidya",
//     loginCount: 25,
//     isLoggedIn : true,
//     courseList : [],
//     buyCourse : function (courseName) {
//         this.courseList.push(courseName);
//     },
//     getCourseCount : function () {
//         return `${this.firstName} is enrolled ${this.courseList.length} courses.`;
//     },

//  } 
// console.log(obj);
// console.log(obj.getCourseCount());
// console.log(obj.buyCourse("JS Course"));
// console.log(obj.buyCourse("React Course"));
// console.log(obj.getCourseCount());


// //for loop
// var myState = ["Assam", "Tripura", "Westbangal", "Maharastra", "Mizoram", "Meghalaya", 1994];

// for (let i = 0; i< myState.length; i++) {
//     if (typeof myState[i] !== "string") continue;
//     // if (typeof myState[i] !== "string") break;
//     console.log(myState[i]);
// }

//  //WHile loop
//  let i = 0;
//  while(i < myState.length) {
//     console.log(myState[i]);
//     i++;
//  }

// //Do While
// let i = 0; 

// do {
//    console.log(myState[i]);
//    i++;
// } while(i < myState.length) 


// Incomplete................the task below

// function array_Clone(i) {
//     return Array;
// }

//  //Q. Write a JavaScript program that displays the largest integer among two integers. 
//  var a = 3;
//  var b = 5;
//  var c = function () {
//     return a - b
//  }
//  console.log(`biggest integer is ${c}`);



// var x = 1;
// a();
// b();
// console.log(x);

// function a () {
//     var x = 10;
//     console.log(x);
// };

// function b () {
//     var x = 100;
//     console.log(x);
// }


// var a = 8;
// if (a === undefined) {
//     console.log("true");
// } else {
//     console.log( a);
// }


// //Scope and lexical env
// function a() {
  
//     c();
//     function c() {
//         console.log(b)
//     }

// }
// var b = 10;
// a();


// //let and var in JS ARE in temporally dead zone
// console.log(b);
// let a = 10;
// var b = 100;
// console.log(b);



// //closure 
// //function binding with the laxical scope form a closure.
// function x() {
//     for(let i = 1; i <=5 ; i++) {
//         setTimeout(function() {
//             // a = 100;
//             console.log(i);
//         }, 3000)
//     }
//     var a = 10;
    
   
// }
// x();
// console.log("Hello Mr D");


//difference bet the fn statement and expression are only the hoisting, fun a is allocated the function a memory, whereas b is like any other variable, this is the difference between them.

// a();
// b();
// // * Function statement is also known as Function Declaration 
//     function a() {
//         console.log("a called");
//     }

// // * Function Expression
//     var b = function () {
//         console.log("b called");
//     }
   
// // Function Declaration
// //.....same as like statement......


// // * Anonymous Function, the function without name is an Anonymous function
// function () {
    
// }

// // * named function expression
//     var b = function a() {
//         console.log("a called");
//     }


// // * Difference  between Parameters and Arguments
//     var b = function (params1, params2) { //params1 and params2 are parameters 
//         console.log("b called");
//     }
//     b(10, 20); //10 and 20 are arguments


// // * First Class Function
//     var b = function (params1, params2) { //params1 and params2 are parameters 
//         console.log(params1 );
//     }
//     b(function() {

//     });//this are the examples of functions that can be passed as an argument, even i can return a function in the function.
//     //The ability to use function as a value in JavaScript is called first-class functions. Also some called first-class citizens.

// * Arrow Functions



// //What is callback function in javascript?
// setTimeout(function () {  //this is a callback function
//     console.log("Hello Mr. D");
// }, 5000);

// function x(y) {     //Javascript is a synchronous and single-threaded language, but javascript won't wait for the callback function to be executed.
//     console.log("x");
//     y();
// }
// x(function y() {
//     console.log("y");

// });

//Javascript is a synchronous and single-threaded language

//Blocking the main thread

//Power of Callbacks?

// //Deep about event listeners
// //Closures demo with event listeners
// //Scope demo with event listeners
// function countClick() {
//     let count = 0;
//     document.getElementById("clickMe").addEventListener("click", function x() {
//         console.log("Hello Mr. D", count++);
//     });  //this is also a callback function, it will store the value somewhere and when i click the button it wii appear in the call stack.
// };
// countClick();




//Garbage collection & removeEventListeners, just because the it takes lots of memory so.

// //event loop
// //web apis, DOM apis, callback function, setInterval, setTimeout, fetch, promises, async/await etc.
// console.log('Start');
// setTimeout(function cbTime() {
//     console.log("cb setTimeout");
// }, 5000);
// fetch("https://api.netflix.com").then(function cbFetch() {
// console.log("cb fetch");    
// });
// console.log("end");


// //[].map(), [].filter(), [].reduce()
// const arr = [5, 1, 3, 4, 6];
// function double(x) {
// return x * 2
// };
// const output = arr.map(double);
// console.log(output);

// //[].reduce()
// const user = [
//     {firstName: "Sonu", lastName: "Sb", age: 29},
//     {firstName: "Mr D", lastName: "Ds", age: 43},
//     {firstName: "Mr S", lastName: "Ind", age: 51},
//     {firstName: "Deb", lastName: "Sb", age: 29},
// ]

// const output = user.reduce(function(acc, curr){
    
// })

// //Task: filter out from the object whose age is below 30, get the only first name of it by using reduce.



