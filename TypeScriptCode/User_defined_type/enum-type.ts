//Enum -> numeric enum, string enum, heterogeneous enum
//store constants, duplicate value is not allowed here

//numeric enum
enum RequestType {
    readData = 1,
    saveData = 3,
    deleteData,
}

// console.log(RequestType);
// console.log(RequestType.deleteData);
// console.log(RequestType["deleteData"]);

//string enum
enum RequestType2{
    readData = "READ_DATA",
    deleteData = "DELETE_DATA",
}
// console.log(RequestType2.deleteData);
// console.log(RequestType2["deleteData"]);


//heterogenous type

enum RequestType3{
    readData = "READ_DATA",
    deleteData = "DELETE_DATA",
    id = 101
}

console.log(RequestType3);