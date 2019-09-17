"using strict"

//const userName = prompt("Enter your name");
//alert(`Hi ${userName}`);

// using <p id = "target">
// const myP = document.getElementById("target");
// myP.innerHTML = "Hi ME!";

// using <p id = item1> ...
// const item1Li = document.getElementById("item1");
// const item2Li = document.getElementById("item2");
// const item3Li = document.getElementById("item3");

// item1Li.innerHTML = "Penguin";
// item2Li.innerHTML = "Frog";
// item3Li.innerHTML = "Moose";

// using <p id = "result">
let catName1 = prompt("Enter first cat's name");
let catName2 = prompt("Enter second cat's name");

let resultP = document.getElementById("result");
resultP.innerHTML = `My cats are named ${catName1} and ${catName2}`;