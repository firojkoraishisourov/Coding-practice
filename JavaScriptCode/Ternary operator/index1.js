let number = Number(prompt("Enter a number: "));
/*
if(number > 0){
    console.log("the number is positive")
}
else if(number < 0){
    console.log("the number is negative")
}
else{
    console.log("Zero")
}
*/

let result = number > 0 ? "Positive" : number < 0 ? "Negative" : "Zero";
console.log(result);

