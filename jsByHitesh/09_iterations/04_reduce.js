// ********* reduce ********

const myNum = [1, 2, 3, 4, 5];

// const myTotal = myNum.reduce( function (acc, currval) {
// console.log(`acc: ${acc} and current value is: ${currval}`);
// return acc + currval
// }, 0); // here 0 is the first accumulator

const myTotal = myNum.reduce( (acc, curr) => acc+curr, 0 )

// console.log(myTotal);


const shopingCart = [
    {
        course: "JS course",
        price: 2999
    },
    {
        course: "python",
        price: 999
    },
    {
        course: "Data Scientist",
        price: 12999
    },
    {
        course: "AWS",
        price: 14999
    },

]

// const total = shopingCart.map( (item) => item.price )

const total = shopingCart.reduce( (acc, curr) => (acc + curr.price), 0)

// console.log(total);

