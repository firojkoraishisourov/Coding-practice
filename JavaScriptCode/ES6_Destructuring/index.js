//destructuring array
// let numbers = [10, 20, 30, 40, 50];
// let [num1,num2,num3,num4,num5] = numbers;
// console.log(num1);
// console.log(num2);


//swap variables
// let a = 10, b = 20;
// [a,b] = [b,a];
// console.log(a);
// console.log(b);


//destructuring object
// const studentInfo  = {
//     id : 101,
//     fullName : "Firoj Koraihsi",
//     cgpa : 3.65,

//     languages : {
//         native : "bangla",
//         beginner : "english"
//     }
// }

// const {id, fullName, languages} = studentInfo;

// console.log(id);
// console.log(fullName);
// console.log(studentInfo.cgpa); // this is not destructuring , that is why studentInfo. is used
// console.log(languages.native);



//destructuring function parameters
const studentInfo = ({id,fullName}) =>{
    console.log(`${id}, ${fullName}`);
}

const students ={
    id : 101,
    fullName : "Firoj Koraishi"
}

studentInfo(students);