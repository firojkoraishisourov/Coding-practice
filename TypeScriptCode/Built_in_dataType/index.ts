//built-in-Datatype : number, string, boolean, void, undefined, null

//let id; // here datatype is any

let userId : number;
let firstName : string;
let lastName : string;
let isActivated : boolean; 

userId =101;
firstName = "Sourov";
lastName = " Sheikh";
isActivated = true;

let fullName : string = firstName.concat(lastName);

console.log(`Your id: ${userId}, Your Name: ${fullName}, account activated: ${isActivated}`);

console.log(fullName.split(" "));