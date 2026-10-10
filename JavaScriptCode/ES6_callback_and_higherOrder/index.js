//callback and higher order function

// function square (x){
//     console.log(`Square of ${x} : ${x*x}`);
// }

// // const y = square;
// // y(5);

// function higherOrderFunction(num, callback){
//     callback(num);
// }

// higherOrderFunction(6,square);



//synchronous programming -- javascript by default synchronous
const taskOne = (callback) => {
    console.log("Task1");
    callback();
};

const taskTwo = (callback) => {
    setTimeout(() =>{
    console.log("Task2. Data Loading");
    callback();
}
, 3000);
};
const taskThree = (callback) => {
    console.log("Task3");
    callback();
};
const taskFour = (callback) => {
    console.log("Task4");
    callback();
};
const taskFive = () => {
    console.log("Task5");
};


taskOne(() =>{
    taskTwo(() =>{
        taskThree(() =>{
            taskFour(() =>{
                taskFive();
            })
        });
    });
});
