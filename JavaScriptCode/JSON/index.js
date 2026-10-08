// //to access easily website -> json path finder

const data = require('./friends_data.json');
// //console.log(data);

// delete data.friends[0].name;
// console.log(data);

// const data = require ('./students_data.json');

// console.log(data.students[1].languages[0]);

//looping
// for (x in data){
//     console.log(x);
//     console.log(data[x]);
// }

//conversion

// const data2 = {
//     name : "Firoj",
//     age : 24
// }
// console.log(JSON.stringify(data2)); // client to server (js object to json)

console.log(JSON.parse('{"name":"Firoj","age":24}')); // server to client (json to js object )