
function addNumber(x , y, z){
    return x + y + z;
}
let numbers1 = [1, 2 , 3];
// console.log(addNumber(...numbers));

// let numbers1 = [5,6, ...numbers];
// console.log(numbers1)

// let numbers2 = [5, ...numbers,  6];
// console.log(numbers2)

let numbers2 = [4, 5 , 6];
let numbers = [... numbers1, ...numbers2];
console.log(numbers);


//object concatation using using spread operator
let p1 = {
    name : "Sourov",
    age : 25
}

let p2 = {
    nationality : "Bangladeshi",
    ocupation : "Student"
}

let p = {...p1, ...p2};
console.log(p);
