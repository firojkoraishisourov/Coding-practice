//array using loop

let num = new Array();


for(let i = 0; i<5 ; i++){
    num[i] = parseInt(prompt("Enter a number: "));
}

let sum = 0;
for(let i = 0; i < num.length; i++){
    console.log(num[i]);
    sum += num[i];
}

console.log('Sum = ',sum);