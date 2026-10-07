// Array - is an object; collection of variables

/*
let names = new Array(5);
names[0] = "MD";
names[1] = "Firoj";
names[2] = "Koraishi";
names[3] = "Sourov";
names[4] = "Sheikh";
*/

//short rules of make array
let names = ["MD" , "Firoj", "Koraishi", "Sourov", "Sheikh"]

console.log(names[1]); //print Firoj
console.log(names[4]); //print Sheikh

console.log(names); //print whole array
console.log(names.length); //print length of array

//some library funcion of array
names.push("Rahim");
names.push("Karim");
names.push("Babu");
console.log(names);
console.log(names[5]);
console.log(names.length);


names.pop();//remove very last element of array
console.log(names);

names.pop();
console.log(names);

//array concatation

let country1 = ["Bangladesh", "India"];
let country2 = ["China" ,"Pakistan"];

let country = country1.concat(country2);
console.log(country);