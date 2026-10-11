
let users: object [];
users = [];

let user1 : {
    userName: string,
    userId: number
};

user1 = {
    userName : "Sourov",
    userId : 101
};
users.push(user1);

let user2 : {
    userName: string,
    userId: number
};

user2 = {
    userName : "Sheikh",
    userId : 102
};

users.push(user2);

//console.log(users);

for (const key in users){
    console.log(users[key]);
}