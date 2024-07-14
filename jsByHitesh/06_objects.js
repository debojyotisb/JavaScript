// ********* Objects *********



// Two types, a. singleton b. constructor method.
//singleton, example
// const user = new Object ();
// constructor method, example
// const user = {};

// object.create // constructor method

//object literals

const mySym = Symbol("key1");

const myObj = {
    name: "Mr Robo",
    "full name": "Mr Robo i3 11th",
    age: 30,
    email: "mr.robo@google.com",
    isActive: ["Monday", "Tuesday", "Wednesday"],
    [mySym]: "mykey01"
}

// myObj.full name  // cannot be accessible, so instead for access the value try myObj.["full name"].

// console.log(myObj.name); // This is not an good practice.
// console.log(myObj["name"]); // This is perfect.
// console.log(myObj);
// console.log(typeof mySym); // now its type is Symbol not a String.

// for changing the value

myObj.name = "Mr. SB";

// now if i wish to to do not change the value of the object, we can freeze the key. Example..

myObj.name = "Mr Robo";
// Object.freeze(myObj);

// myObj.name = "Mr. D"; // this value won't change.

// console.log(myObj);

// add function to my object

myObj.greeting = function() {
    console.log("Hello sir, welcome!");
}

// console.log(myObj.greeting); // returns undefined.

// console.log(myObj.greeting());
// console.log(myObj);

myObj.greetingTwo = function() {
    console.log(`Hello ${this.name}, welcome!`);
}
console.log(myObj.greetingTwo());
// console.log(myObj);


// ************ Object 2 *********

const user = {};

user.id = "123abc";
user.name = "Mr. Robo";
user.isLoggedIn = false;

// console.log(user);
// console.log(Object.keys(user)); // it shows that the all the keys stored in a array. So if is an array that can be easily manipulated..
// console.log(Object.values(user)); // also can show the value of an object.
// console.log(Object.entries(user)); // this entries method return every key-values in a separate array.
// console.log(user.hasOwnProperty('id')); // expected output will be true. This method allow you to check the Key of an object are exist or not.


const user2 = {
    userName: {
        fullName: {
            firstName: "Mr. ",
            lastName: "Robo"
        }
    }
}

// console.log(user2.userName.fullName); // Nested Obj


// Obj Marge

const obj1 = { 1: "a", 2: 'b'};
const obj2 = { 3: "c", 4: "d"};

// const obj3 = { obj1, obj2 } // it cannot returns expected output. So instead..
const obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3);

// By using spread operator
const obj4 = {...obj1, ...obj2};
// console.log(obj4);


// ********** Object Destructuring ************

// Destructuring from User Obj
// console.log(user.name); // to access obj value in multiple times, that comes in short destructuring. Example

const {name: Owner} = user; // Also I can change the Key Name here by using : after the current key.
// console.log(Owner);

