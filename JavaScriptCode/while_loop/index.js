//sum of all numbers that are divisible by 3 and 5 from 1-100

let sum = 0;

let i = 1;
while(i <= 100){
    if(i % 3 == 0 && i % 5 == 0){
        sum += i;
    }
    i++;
}

document.write(sum);