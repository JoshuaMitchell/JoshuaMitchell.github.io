"using strict"

let quoteArray = [
    "I have a lot of random hobbies. - Ross Butler",
    "Goals transform a random walk into a chase. -Mihaly Csikszentmihalyi",
    "I take random inspiration from everywhere. - Edward Enninful",
    "Maybe life is random, but I doubt it. - Steven Tyler", 
    "My life was a sort of series of random disasters. - Claire Tomalin"
];
let quoteIndex = 0;

function showQuote() {
    // console.log("working");
    let p = document.getElementById("quote-display");
    p.innerHTML = quoteArray[quoteIndex];
    quoteIndex = (quoteIndex + 1) % quoteArray.length;
}

function lotteryGame() {
    // console.log("haha");
    let usrInput = document.getElementsByClassName("num-input");
    let usrArr = [];
    for(let numInput of usrInput){
        usrArr.push(numInput.value);
    }
    // console.log(usrArr);

    let ranArr = [];
    for (let i = 0; i < 5; i++) {
        ranArr.push(Math.floor(Math.random()*10+1));
    }
    this.after(ranArr);

    let resultSpan = document.getElementsByClassName("match-results");
    spanArr = [
        "not a match",
        "match"
    ];
    for (let i = 0; i < usrArr.length; i++) {
        for (let j = 0; j < ranArr.length; j++) {
            if (usrArr[i] === ranArr[i]) {
                resultSpan.innerHTML = spanArr[0];
            } else {
                resultSpan.innerHTML = spanArr[1];
            }
        }
    }
    let lottoResult = document.getElementById("final-result");
    if (usrArr === ranArr) {
        lottoResult.innerHTML = `You win!`
    } else {
        lottoResult.innerHTML = `Try again!`
    }
}

window.onload = function() {
    showQuote();
    this.setInterval(showQuote,2000);

    let lotteryBtn = document.getElementById("lotto-btn");
    lotteryBtn.onclick = lotteryGame;
}