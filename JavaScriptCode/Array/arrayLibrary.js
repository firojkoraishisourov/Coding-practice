

let names = ["MD","Firoj","Koraishi","Sourov"];
console.log(names);

//shift -- it is opposite of pop()
names.shift(); 
console.log(names);

////unshift -- it is opposite of push()
names.unshift("Muhammad"); 
console.log(names);

//splice --- adding element
names.splice(2,0,"Karim","Babu");
console.log(names);

//splice --- remove element
names.splice(1,2);
console.log(names);

//slice -- create new array but it doesn't affect original array
let newArray = names.slice(1);
console.log(newArray);
console.log(names);

//alphabatically sort
let sortedNames = names.sort();
names.reverse();
console.log(sortedNames);


//num sort
let num = [5, 3,4,1,2];
num.sort()
console.log(num);

//sort
let sortedNum = num.sort();
console.log(sortedNum);

//reverse
num.reverse();
console.log(num);