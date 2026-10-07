let num1 = prompt("Enter the first number: ");
let num2 = prompt("Enter the second number: ");
let num3 = prompt("Enter the third number: ");

if(num1 > num2 && num1 > num3){
    console.log("large number = "+num1);
}

else if(num2 > num1 && num2 > num3){
    console.log("large number = "+num2);
}

else {
    console.log("large number = "+num3)
}