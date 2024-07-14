// ****** map ******

const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//  const newNumber = myNumber.map( (num) => { 
//     return num +10} );

const newNumber = myNumber.map( (num) => { 
    return num * 10} ).map( (num) => num +1 ).filter( (num) => num <= 50 ); // This is chaining method, where we can use multiple times use methods.

//  console.log(newNumber);


 