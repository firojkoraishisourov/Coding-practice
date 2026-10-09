

// creating html element

var heading3 = document.createElement("h1");
var text = document.createTextNode("This is a heading 3");
heading3.appendChild(text);

var myDiv = document.getElementById("my-div");
myDiv.appendChild(heading3);

//removing an element
var heading2 = document.getElementsByTagName("h1")[1];
myDiv.removeChild(heading2);

//creating element in the upper side 
var heading0 = document.createElement("h1");
var text0 = document.createTextNode("This is a heading 0");
heading0.appendChild(text0);
var heading1 = document.getElementsByTagName("h1")[0];
myDiv.insertBefore(heading0,heading1);

