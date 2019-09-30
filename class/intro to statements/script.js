"Using strict"

function showGiftMessage(){
    let resultElem = document.getElementById("results");
    let gift = document.getElementById("txtGift").value;
    gift = gift.toLowerCase().trim();

    // if (gift === "doll")
    //     resultElem.innerHTML = "<strong>I love dolls!</strong>";
    // else
    //     resultElem.innerHTML = "<strong>No, I'm broke!</strong>";

    switch(gift){
        case "doll":
            resultElem.innerHTML = "I love dolls!";
            break;
        case "car":
            resultElem.innerHTML = "I love cars";
            break;
        default:
            resultElem.innerHTML = "<strong>No, I'm broke!</strong>";
    }
}

// html and css loaded to the page
window.onload = function(){
    const btnDisplay = document.getElementById("btnDisplay");
    btnDisplay.onclick = this.showGiftMessage;
}