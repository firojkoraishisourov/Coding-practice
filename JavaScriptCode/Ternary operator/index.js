//without ternary operator


let number = Number(prompt("Enter a number: "));
/*
if(number > 0){
    console.log("the number is positive")
}
else{
    console.log("the number is negative")
}
*/

//ternary operator
let result = number > 0 ? console.log("the number is positive") : console.log("the number is negative") ;

console.log(result);