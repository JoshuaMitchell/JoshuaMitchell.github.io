"using strict"

function showAgeMessage() {
    let resultComp = document.getElementById("comp-results");
    let nameOne = document.getElementById("name-one").value;
    nameOne = nameOne.trim();
    let ageOne = document.getElementById("age-one").value;
    ageOne = Number(ageOne);
    let nameTwo = document.getElementById("name-two").value;
    nameTwo = nameTwo.trim();
    let ageTwo = document.getElementById("age-two").value;
    ageTwo = Number(ageTwo);
    let nameThree = document.getElementById("name-three").value;
    nameThree = nameThree.trim();
    let ageThree = document.getElementById("age-three").value;
    ageThree = Number(ageThree);
    
    if (ageOne >= ageTwo && ageTwo >= ageThree) {
        resultComp.innerHTML = `Oldest to Youngest: ${nameOne}, ${nameTwo}, ${nameThree}`;
    } else if (ageOne >= ageThree && ageThree >= ageTwo) {
        resultComp.innerHTML = `Oldest to Youngest: ${nameOne}, ${nameThree}, ${nameTwo}`;
    } else if (ageOne <= ageTwo && ageOne >= ageThree) {
        resultComp.innerHTML = `Oldest to Youngest: ${nameTwo}, ${nameOne}, ${nameThree}`;
    } else if (ageOne <= ageTwo && ageOne <= ageThree) {
        if (ageTwo >= ageThree) {
            resultComp.innerHTML = `Oldest to Youngest: ${nameTwo}, ${nameThree}, ${nameOne}`;
        } else if (ageTwo <= ageThree) {
            resultComp.innerHTML = `Oldest to Youngest: ${nameThree}, ${nameTwo}, ${nameOne}`;
        }
    } else if (ageOne <= ageThree && ageOne >= ageTwo){
        resultComp.innerHTML = `Oldest to Youngest: ${nameThree}, ${nameOne}, ${nameTwo}`;
    } else 
        resultComp.innerHTML = `Invalid Entry`;
}

function showLangMessage() {
    let resultLang = document.getElementById("lang-results");
    let langInput = document.getElementById("lang-input").value;
    langInput = langInput.trim();

    if (langInput === "Spanish")
        resultLang.innerHTML = `Hola mundo`;
    else if (langInput === "French")
        resultLang.innerHTML = `Bonjour le monde`;
    else if (langInput === "German")
        resultLang.innerHTML = `Hallo welt`;
    else if (langInput === "Portugese")
        resultLang.innerHTML = `Ola Mundo`;
    else if (langInput === "Japanese")
        resultLang.innerHTML = `Konnichiwa sekai`;
    else if (langInput === "English")
        resultLang.innerHTML = `Hello world`;
    else 
        resultLang.innerHTML = `Please select French, German, Portugese, Spanish, or Japanese`;
}

function showPluralMessage() {
    let resultPlur = document.getElementById("plur-results");
    let itemNumber = document.getElementById("item-input").value;
    itemNumber = Number(itemNumber);
    let itemName = document.getElementById("item-name").value;
    itemName = itemName.trim();
    let errorSpan = document.getElementById("errorNegativeNum");

    if (errorSpan != null) {
        errorSpan.remove();
    }

    if (itemNumber == 1)
        resultPlur.innerHTML = `You ordered 1 ${itemName}`;
    else if (itemNumber > 1)
        resultPlur.innerHTML = `You ordered ${itemNumber} ` + `${itemName}s`;
    else {
         if (itemNumber <= 0)
         console.log("Error: Negative Number");
            errorSpan = document.createElement("span");
            errorSpan.id = "errorNegativeNum";
            errorSpan.innerHTML = "* Negative Number";
            errorSpan.classList.add("error");
            this.after(errorSpan);
    }
}

// html and css loaded to the page
window.onload = function() {
    const btnDisplayOne = document.getElementById("comp-button");
    btnDisplayOne.onclick = this.showAgeMessage;
    const btnDisplayTwo = document.getElementById("lang-button");
    btnDisplayTwo.onclick = this.showLangMessage;
    const btnDisplayThree = document.getElementById("plur-button");
    btnDisplayThree.onclick = this.showPluralMessage;
}