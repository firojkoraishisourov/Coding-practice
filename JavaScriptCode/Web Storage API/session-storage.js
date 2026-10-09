//localStorage vs sessionStorage 
// 10 mb vs 5 mb 
// permanent vs session (tab)
//both works on browser

//sessionStorage.setItem("user","Firoj");
//const userName = sessionStorage.getItem("user");

// sessionStorage.removeItem("user");

// sessionStorage.setItem("user1","Firoj");
// sessionStorage.setItem("user2","Sourov");

// sessionStorage.clear();

const user = {id : "101", name : "firoj"};
sessionStorage.setItem("user",JSON.stringify(user));


const userInfo = JSON.parse(sessionStorage.getItem("user"));
console.log(userInfo);
