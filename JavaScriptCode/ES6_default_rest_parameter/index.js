
"use strict"

//default parameter
// function message(text = "hello this is default parameter"){
//     console.log(`${text}`);
// }
// message();
// message("I love es6");

//rest parameter
function printNumber (x,y, ...z){
    console.log(`x = ${x}, y = ${y}, z = ${z}`);
}
printNumber(5,6,30,40,50);