// IIFEs (Immediately Invokeable Function Expression)

(function display(message){
    console.log(message);
})('hello');

//Task 7: create an IIFEs that print sum of 2 numbers

(function add(num1,num2){
    console.log("Sum : "+(num1+num2));
})(10,20)


//Functin Expression
let display2 = function displayMessage(msg){
    console.log(msg);
}

display2('hi i am message');
