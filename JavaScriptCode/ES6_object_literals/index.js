
//object literals

function studentInfo1(name,age){
    return{
        name,
        age
    }
}
console.log(studentInfo1("sourov",29));

let message ={
    'body name'(){
        return "hi I am object function";
    }
}
console.log(message['body name']());
