//Arrow function (part-2) | arrow with map, filter

let students = [
    {
        id : 101,
        name : "sourov",
        cgpa : 3.87
    },
    {
        id : 102,
        name : "bijoy",
        cgpa : 3.76
    },
    {
        id : 103,
        name : "robi",
        cgpa : 2.87
    },
    {
        id : 104,
        name : "rahim",
        cgpa : 3.50
    }
]

function studentNames1 (){
    return students.filter(function(x){
        return x.cgpa > 3;
    }).map(function(y){
        return y.name;
    });
}

const studentNames2 = () => students.filter((x) => x.cgpa > 3).map((y) => y.name);


console.log(studentNames1());
console.log(studentNames2());