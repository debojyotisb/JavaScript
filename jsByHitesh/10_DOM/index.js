const myH1 = document.querySelector("h1");
myH1.style.color = "green";

const tempArray = document.getElementsByClassName('bg-black');
console.log(tempArray); // it returns HTML Collections, looks like array but not an array, so to manipulate using DOM it need to convert to array.
const myConvertedArray = Array.from(tempArray);
console.log(myConvertedArray); // here how converted to array using Cap Array.from() and stored in a variable.

myConvertedArray.forEach( (h1) => {
    h1.style.color = "orange";
} )

