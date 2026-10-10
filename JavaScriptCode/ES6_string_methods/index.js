//startWith(searchString, position) -> check a string starts with another string
//endsWith(searchStrin, length) -> check a string ends with another string
//includes(searchString, position) -> check if a string containts another string
//all these methods are case sensitive


const message = "Today is friday";

//startWith
console.log(message.startsWith('Today'));
console.log(message.startsWith('Today' , 10));

//endsWith
console.log(message.endsWith('friday'));

//includes
console.log(message.includes('is'));