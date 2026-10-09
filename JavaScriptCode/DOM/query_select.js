//getElementById()
//getElementByTagName()
//getElementByClassName()

// These whole three things can by done by querySelector()
// id select -># , class select -> .

// document.querySelector("#pid").innerHTML="this is changed";

// document.querySelector(".pid1").innerHTML="this is changed 1";

// document.querySelector("h1").innerHTML = "Sheikh Sourov";


document.querySelector("li a").innerHTML = "New text";

document.querySelector("div a").innerHTML = "New text";

//querySelectorAll()
document.querySelectorAll("li")[1].innerHTML = "New text";
