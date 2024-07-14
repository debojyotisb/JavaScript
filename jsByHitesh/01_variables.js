console.table(["Hello Mr Robo"]);
const userName = "Mr Robo";
let userAge = 25;
var userCity = "Silchar";
let userGender = "Male";

/*
Prefer not to use var, because of issue in block scope and functional scope.
printing in table,
*/

console.table([userName, userAge, userCity, userGender])