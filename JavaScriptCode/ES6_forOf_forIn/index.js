
//for..of
// const names = ["s1", "s2", "s3"];

// for(let name of names){
//     console.log(name);
// }

//for..in -> to iterate object for..in used

let students = {
    ID : 101,
    name : "Sourov",
    cgpa : 3.87
}

for(let x in students){
    console.log(`${x} : ${students[x]}`);
}