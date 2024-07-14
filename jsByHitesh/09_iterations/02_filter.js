// ******* Filter *****

console.log("Back filter Mr Robo");

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const res = myNums.filter( (num) => { // if i use this brackets here then i need to use return keyword to the next line.
//     return num > 5
// } )

const res = myNums.filter( (num) => num <5 ) // here i didn't use brackets instead i wrote in one line, so here doesn't require return keyword.

// console.log(res);

// using forEach
const newNums = [];
myNums.forEach( (num) => {
    if (num > 5) {
        newNums.push(num)
    }
} )
// console.log(newNums);


