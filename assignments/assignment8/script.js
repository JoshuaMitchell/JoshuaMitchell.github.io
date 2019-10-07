"using strict"

function displayAsciiConversion() {
    let asciiResults = document.getElementById("word-results");
    let charInput = document.getElementById("word-input").value;
    charInput = charInput;
    let s = "";

    for (let i = 0; i < charInput.length; i++) {
        s += charInput.charCodeAt(i);
        if (i < charInput.length - 1) {
            s += ", ";
        }
    }
    asciiResults.innerHTML = s;
}

function displayEvenSum() {
    let evenResults = document.getElementById("num-results");
    let numInput = document.getElementById("num-input").value;
    numInput = Number(numInput);
    let sum = 0;
    let s = `Sum: `;

    for (let i = 2; i <= numInput; i += 2) {
        sum += i;
    }
    console.log(sum);
    s += sum;
    evenResults.innerHTML = s;
}

window.onload = function() {
    // displays result of Ascii function
    let ascButton = document.getElementById("ascii-button");
    ascButton.onclick = displayAsciiConversion;

    // displays result of Sum Function
    let sumButton = document.getElementById("sum-button");
    sumButton.onclick = displayEvenSum;
}