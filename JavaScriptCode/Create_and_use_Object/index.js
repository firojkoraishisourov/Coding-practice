
// student details

//adding function inside a constructor
//adding a constructor
function Student(name,age,cgpa,lang){
    this.name = name;
    this.age = age;
    this.cgpa = cgpa;
    this.lang = lang;

    this.display = function (){
        console.log(this.name);
        console.log(this.age);
        console.log(this.cgpa);
        console.log(this.lang);
    }
}

//using constructor , creating multiple object
let student1 = new Student("Sourov",27,3.87,["Bengali","Hindi","English"]);
let student2 = new Student("Rakib",26,3.70,["Bengali","Urdu","English"]);
let student3 = new Student("Abrar",24,3.80,["Bengali","Arabi","English"]);

//print separetely without using function
console.log("Stundent 1 Information: ")
console.log(student1.name);
console.log(student1.age);
console.log(student1.cgpa);
console.log(student1.lang);

//print using constractor function
console.log("Stundent 2 Information: ")
student2.display();

console.log("Stundent 3 Information: ")
student3.display();


/*
//how to create an object
let student2 = {
    name : "Rakib",
    age : 26,
    cgpa : 3.70,
    lang : ["Bengali","Urdu","English"]
}

let student3 = {
    name : "Abrar",
    age : 26,
    cgpa : 3.80,
    lang : ["Bengali","Arabi","English"]
}

//how to print a value of an object
console.log(student1.name);
console.log(student2.name);

*/