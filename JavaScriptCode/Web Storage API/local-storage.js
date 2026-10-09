// Web storage API - allows us to store and read data in browser
// Web storage API - localstorage, sessionStorage
// localStorage - store, read, update and remove data
// no expiry date : data never gets lost even if you close the browser

// localStorage store data as key value pair - string

//setItem(key,value)
// localStorage.setItem("userName","Firoj");
// localStorage.setItem("password","1234");

// getItem(key)
// const userName = localStorage.getItem("userName");
// const password = localStorage.getItem("password");

// console.log(userName,password);

// //update 
// localStorage.setItem("userName","Sourov");
// localStorage.setItem("password","4321");

// //removeItem(key)
// localStorage.removeItem("userName");
// localStorage.removeItem("password");


//setItem(key,value)
const countries = ["Bangladesh","India","Pakistan","China"];
localStorage.setItem("countries",JSON.stringify(countries));

//getItem(key)
JSON.parse(localStorage.getItem("countries"));
console.log(countries);

localStorage.clear();
