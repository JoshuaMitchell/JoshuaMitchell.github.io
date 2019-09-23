"using strict"

// gather information
const firstName = document.getElementById("firstName").innerHTML = `Joshua`;
const lastName = document.getElementById("lastName").innerHTML = `Mitchell`;
const productName = document.getElementById("product").innerHTML = `Beach Ball`;
const productCount = document.getElementById("count").innerHTML = `5`;
const productPrice = document.getElementById("price").innerHTML = `3.47`;
const salesTax = document.getElementById("tax").innerHTML = `0.07`;

// conduct calculations of the product
let calc = Number(productPrice) * Number(productCount) * Number(salesTax);
let total = Number(calc) + Number(productPrice) * Number(productCount);

// write the result
const resultElem = document.getElementById("result");
const totalElem = document.getElementById("total");
resultElem.innerHTML = `${firstName} ` + `${lastName} ordered ${productCount} ` + `${productName}(s)`;
totalElem.innerHTML = `Totalling: $${total.toFixed(2)}`;