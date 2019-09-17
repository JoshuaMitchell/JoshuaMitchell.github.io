"using strict"

let userName = prompt("What is your name?");
let coffeeNum = prompt("How many coffees would you like?");
let tip = prompt("How much would you like to tip?");
let total = Number(tip) * 0.07;

let resultP = document.getElementById("result");
resultP.innerHTML = `${userName} ordered ${coffeeNum} coffees, Total: $ ${Number(tip) + total}`;