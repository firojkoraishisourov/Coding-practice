let num1 = prompt("Enter first number: ");
let num2 = prompt("Enter second number: ");

num1 = parseInt(num1,10);
num2 = parseInt(num2,10);

let sum = num1 + num2;
let sub = num1 - num2;
let mul = num1 * num2;
let div = num1 / num2;
let mod = num1 % num2;

document.write(num1 + " + " + num2 + " = " + sum + "</br>");
document.write(num1 + " - " + num2 + " = " + sub + "</br>");
document.write(num1 + " * " + num2 + " = " + mul + "</br>");
document.write(num1 + " / " + num2 + " = " + div + "</br>");
document.write(num1 + " % " + num2 + " = " + mod);