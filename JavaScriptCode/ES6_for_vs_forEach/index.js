

// let numbers = [10 ,20, 30];
// for(let i = 0; i < numbers.length; i++){
//     console.log(numbers[i]);
// }

let numbers = [10 ,20, 30];
console.log(numbers);
numbers.forEach(function(x,index,arr){
    arr[index] = x + 5;
})

console.log(numbers);