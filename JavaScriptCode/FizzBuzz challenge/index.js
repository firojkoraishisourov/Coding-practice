let start = 1;
let end = 100;

for(let i = start; i <= end; i++){
    if(i % 3 == 0 && i %5 == 0){
        document.write(i+ " FizzBuzz </br>");
    }
    else if(i % 3 == 0){
        document.write(i+ " Fizz </br>");
    }
    else if(i %5 == 0){
        document.write(i+ " Buzz </br>");
    }
    
    else{
        document.write(i+ "</br>");
    }
}