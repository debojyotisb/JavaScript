// ************ for loop ************


console.log("Hey Mr Robo, Welcome to another part of the code.");

// for loop

for (let index = 0; index <= 10; index++) {
    const element = index;
    if (element == 5) {
        // console.log(" print 5 number");
    }
    // console.log(element);  
}

for (let i = 0; i <= 10; i++) {
    // console.log(`Outer loop ${i}`);
    for (let j = 0; j <= 10; j++) {
        // console.log(`Inner loop ${j}`);
        
    }   
}


// break and continue
// example

for (let i=0; i<20; i++) {
    if (i == 5) {
        // console.log(`Detected ${i}`);
    break; // loop will stop the execution.
    }
    // console.log(`Value of i: ${i}`);
}

for (let i=0; i<20; i++) {
    if (i == 5) {
        // console.log(`Detected ${i}`);
    continue; // loop will continue the execution until ends but it execute the condition and again starts the loop.
    }
    // console.log(`Value of i: ${i}`);
}



// ************* while loop *************
// syntax
// while (condition) {
    
// }

// example

let index = 0;
while (index <= 10) {
    // console.log(`Value of index: ${index}`);
    index = index + 2;
}

let myArray = ['a', 'b', 'c'];
let arr = 0;
while (arr < myArray.length) {
    // console.log(`Value of arr: ${myArray[arr]}`);
    arr = arr + 1;
}



// ************ do while loop ************
// syntax
// do {
    
// } while (condition);

// example

let score = 1;
// let score = 11
do {
    // console.log(`Score is ${score}`);
    score = score + 1;
} while (score <= 10);



// ************ for of loop ************
// syntax
// for (let element of iterable) {
    
// }

// example
let arr2 = ['a', 'b', 'c'];

for (let i of arr2) {
    // console.log(`Value of i: ${i}`);
}

let greeting = "Hello Mr Robo!";
for (const greet of greeting) {
    // console.log(`Each character: ${greet}`);
}


// for in loop iteration with object

const myObject = {
    js: 'JavaScript',
    cpp: 'C++',
    py: 'Python',
    swift: 'Swift by Apple'
}

for (const key in myObject) {
    // console.log(`Key is ${key} and value is ${myObject[key]}`);
}

//  in array
const myArr = ["js", "cpp", "py", "swift"];
for (const iterator of myArr) {
    // console.log(myArr);
}


// Maps

const map = new Map()
map.set('IN', "India");
map.set('USA', "United State of America");
map.set('FR', "France");
map.set('IN', "India");
// console.log(map);

for (const key in map) {
    // console.log(map[key]);
};



// ************ forEach **********
// array prototype

const coding = ["js", "ruby", "py"];

coding.forEach( function (value) {
// console.log(value);
} );

// or

coding.forEach( (item) => {
    // console.log(item);
} );

// or

function printMe (item) {
    // console.log(item);
}
coding.forEach(printMe);

coding.forEach( (item, index, arr) => {
    // console.log(item, index, arr);
} );




// Note: Return value from the database are always are in a array form and where object is inserted in the array.

// Q: Find out the key or value of object which is inserted in a array. *imp*

const myCoding = [
    {
        languageName: "Javascript",
        languageCode: "js"
    },
    {
        languageName: "python",
        languageCode: "py"
    },
    {
        languageName: "java",
        languageCode: "java"
    }
]; // where object inserted in a array, to iterate by forEach.

myCoding.forEach( (item) => {
    // console.log(`Coding languages are: ${item.languageName}`);
} );


