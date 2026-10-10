//map function
let numbers = [2, 3 , 4, 5];
let squareNumbers = numbers.map(function(x){
    return x*x;
})
console.log(squareNumbers);

//filter function
let numbers1 = [22, 31 , 4, 5, 35, 26,78];

let greaterThanTen = numbers1.filter(function(x){
    return x > 10;
})
console.log(greaterThanTen);
