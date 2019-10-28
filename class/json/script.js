"using strict"

async function displayShoe() {
    let response = await fetch("https://joshuamitchell.github.io/class/json/shoe.json");
    let shoeJson = await response.json();

    let shoeName = shoeJson.name;
    let shoeBrand = shoeJson.brand;
    let comments = shoeJson.comments;

    console.log(`${shoeName} by ${shoeBrand}`)

    for (i in comments) {
        console.log(comments[i]);
    }

    // append a section with info about the shoe to your page
    let section = document.createElement("section");
    section.innerHTML = `${shoeName} by ${shoeBrand}`;
    let content = document.getElementById("content");
    content.append(section);
}

window.onload = function() {
    this.displayShoe();

    // append a h1 to your page
    let content = document.getElementById("content");
    let h1 = document.createElement("h1");
    h1.innerHTML = "I love shoes";
    content.append(h1);
}