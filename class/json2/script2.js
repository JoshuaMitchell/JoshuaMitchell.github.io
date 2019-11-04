"using strict"

async function displayBrews() {
    let response = await fetch("https://api.openbrewerydb.org/breweries");
    let brewsJson = await response.json();
    let contentDiv = document.getElementById("content");

    // loop through brews array
    for (i in brewsJson) {
        let brew = brewsJson[i];
        contentDiv.append(getBrewItem(brew));
    }
}

function getBrewItem(brew) {
    let brewSection = document.createElement("section");
    brewSection.className = "brew";
    let brewImg = document.createElement("img");
    brewImg.src = "images/beer-mug.png";
    let brewTitle = document.createElement("h3");
    brewTitle.innerHTML = brew.name;
    brewSection.append(brewTitle);
    brewSection.append(createBrewPara(brew.brewery_type));
    brewSection.append(createBrewPara(brew.street));
    brewSection.append(createBrewPara(brew.city));
    brewSection.append(createBrewPara(brew.state));
    brewSection.append(createBrewPara(brew.postal_code));
    brewSection.append(createBrewPara(brew.phone));
    brewSection.append(createBrewPara(brew.website_url));

    return brewSection;
}

function createBrewPara(text) {
    let brewP = document.createElement("p");
    brewP.innerHTML = text;

    return brewP;
}

window.onload = function() {
    this.displayBrews();
}