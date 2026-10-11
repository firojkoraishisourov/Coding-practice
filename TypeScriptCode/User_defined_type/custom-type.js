"use strict";
let users;
users = [];
let user1;
user1 = {
    userName: "Sourov",
    userId: 101
};
users.push(user1);
let user2;
user2 = {
    userName: "Sheikh",
    userId: 102
};
users.push(user2);
let user3;
user3 = {
    userName: "Pinki",
    userId: 103
};
users.push(user3);
let getRequest;
getRequest = "GET";
function requestHandler(requestType) {
    console.log(requestType);
}
requestHandler("GET");
