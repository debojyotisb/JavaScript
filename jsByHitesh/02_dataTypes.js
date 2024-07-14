"use strict"

const { log } = require("console");


 // treat all JS code as newer version
//tc39, mdn //read documentation

let name = "Mr Robo";
let age = 30;
// let isLoggedIn = true;

// number
// bigint
// string
// boolean
// null => standalone value
//undefined => value not define
// symbol


// object


// console.log(typeof null); // output Object
// console.log(typeof undefined); // output undefined



// ****************** DataType conversion confusion ********************* 


// let score = "20abc"; //i need the actual number for the score;
// let score = null; //expected output in valueInNumber is Zero.
let score = undefined; // expected output in valueInNumber is NaN.

// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber); //output NaN

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn); // output true


// "20" => 20;
// "20abc" => NaN
// true => 1; false => 0
// "" => false
// "Mr Robo" => true


let someNumber = 20;
let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber);


// *************************** Operations *****************************

let num = 2 + 2;
let addString = "Mr " + "Robo";
let negValue = -num


// console.table([num, addString, negValue]);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/2);
// console.log(2%2);

// console.log("1" + 2); //output 12
// console.log(1 + "2"); // output 12
// console.log("1" + 2 + 2); //output 122
// console.log(1 + 2 + "2"); //output 32

//prefix operator and postfix operator

//prefix
let gameCounter01 = 100;
gameCounter01 ++;
// console.log(gameCounter01); // output 101

//postfix operation
let gameCounter02 = 100;
++ gameCounter02;
// console.log(gameCounter02); // output 101



//**********************************************************//
// console.log(null > 0); // output falsse
// console.log(null == 0); // output false
// console.log(null >= 0); // output true

// console.log(undefined == 0); // output false
// console.log(undefined > 0); // output false
// console.log(undefined < 0); // output false
//these are the confusing code try to avoid it, and try always write clean code.


// In the JS compaireasion and equility are not same.

// === 

// *****************************Datatype Summary *******************

// JS is static or dynamic ?
// Primitive, 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt
const userId = Symbol('123'); //output Symbol(123)
const userId02 = Symbol('123**%^&'); //output Symbol(123**%^&)
// console.log(userId === userId02); //output false
// console.log(userId);
// console.log(userId02);
// console.log(typeof userId); //output symbol


// Reference (Non Primitive): Array, Objects, Functions

// **************************** Stack & Heap Memory **********************

// 2 types of memory: Stack, Heap

// stack (Primitive), its gives us copy of variable
//Heap (Non-Primitive), its gives us reference of the variable


 
// ******************************** String ******************************//

const gameName = new String('Mr Robo.');
console.log(`Hey this the admin, we call him ${gameName}`);  // modern way write String.
// console.table(gameName.__proto__);
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('R'));

const newString = gameName.substring(3, 7); // last value of the index will not count
// console.log(newString);

const anotherString = gameName.slice(-8, 4);
// console.log(anotherString);

const extSpaceString = "     Mr Robo   ";
// console.log(extSpaceString);
// console.log(extSpaceString.trim()); // remove spaces from the top and bottom

const replaceString = "https://mrrobo/robo%20mr";
// console.log(replaceString.replace('%20', '-')) // that help to replace from the string.
// console.log(replaceString.includes('hello')) // this will give the boolean value true or false, that method find the word which is exist in the string or not.
