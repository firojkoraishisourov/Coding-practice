
//find(callback, value) return the value of the first element that pass certain condition
let numbers = [5, 55, 14, 5, 78];
let firstEvenNumber = numbers.find(x => x % 2===0);
console.log(firstEvenNumber);


//findIndex(callback, value) return the index of the first element that pass certain condion
let firstEvenNumberIndex = numbers.findIndex(x => x % 2===0);
console.log(firstEvenNumberIndex);

//use on object
const students = [
    {
        id : 101,
        gpa : 3.80
    },
    {
        id : 102,
        gpa : 3.00
    },
    {
        id : 103,
        gpa : 4.80
    },
    {
        id : 104,
        gpa : 5.00
    }
];

console.log(students.find(x => x.gpa>4));
