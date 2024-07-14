// Array

/* array is an objects, can be store multiple elements and its resizable.
importantely array create shallow copies, rather than deep copies.

* Shallow copy means its an object its a copy whose properties share the same reference, means if an element change its original copy will be also change. (Look MDN)

* Deep copy means do not share the same reference.
*/
const myArray = [1, 2, 3, 4];

const myArray2 = new Array(0, 1, 2);

// Array Methods

myArray.push(5)
// console.log(myArray);
myArray.pop() // remove last element
myArray.unshift(0) // add in the first element 
myArray.shift() // remove first element

// console.log(myArray);

// console.log(myArray.includes(9)); // always returns boolean value, in this case false
// console.log(myArray.indexOf(9)); // returns length property, in this case 9 is not exist so it gives -1.

const newArray = myArray.join() // it converts the elements to String.

// console.log(myArray);
// console.log(newArray);
// console.log(typeof newArray);

// *********** Slice, Splice *********

const sliArray = myArray.slice(1, 2); // original array will not change
// console.log("Original Array: ", myArray);
// console.log(sliArray);

const sliArray2 = myArray.splice(1, 2); // original array will change
// console.log("Original Array: ", myArray);
// console.log(sliArray2);

// **************************

const marvel_heros = ["Ironman", "Captain America", "Thor"];
const dc_heros = ["Superman", "batman", "flash"];

// const concatHeros = marvel_heros.concat(dc_heros);

// Another way to concate by using spread operator. and array.flat() method is also for another concadination method (Look MDN). 
const allHeros = [...marvel_heros, ...dc_heros];
// console.log("heros", allHeros);


marvel_heros.push(dc_heros); // if we push dc_heros to marvel_heros, it will create deep copy. and then i need to declare as a new variable.

// console.log("c ", concatHeros);
// console.log("a ", marvel_heros);
// console.log("b ", marvel_heros[3][2]);

Array.isArray('Mr Robo'); // return boolean value. it checks if its an array or not.

Array.from('mr Robo'); // it converts string to array. each character is an element.

// console.log(Array.from({name: 'Mr Robo', age: 30})); // it converts object to array. but now it gives empty array [] because object is not iterable.


let score1 = 100;
let score2 = 200;
let score3 = 300;
// console.log(Array.of(score1, score2, score3));
// console.log(Math.max(score1, score2, score3));
// ******* OR ******
// const score = Array.of(score1, score2, score3);
// console.log(Math.max(...score));



