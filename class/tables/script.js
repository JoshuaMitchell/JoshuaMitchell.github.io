"using strict"

function highlightCell(event) {
    let callerName = event.target.tagName;
    
    // for anything other than a table cell get out
    if (callerName.toLowerCase() != "td") return;

    // highlight cell
    event.target.classList.add("highlight");
}

function unHighlightCell(event) {
    let callerName = event.target.tagName;
    
    // for anything other than a table cell get out
    if (callerName.toLowerCase() != "td") return;

    // unhighlight cell
    event.target.classList.remove("highlight");
}

function showAnimals() {
    let animalTDs = document.querySelectorAll("#animal-table td");
    let p = document.createElement("p");
    this.after(p);

    for (let animalTD of animalTDs) {
        p.innerHTML += animalTD.innerHTML + ", ";
    }
}

function stylePara() {
    let p = document.getElementsByClassName("special")[0];
    p.classList.toggle("highlight");
}

window.onload = function() {
    this.document.getElementById("animal-table").addEventListener("mouseover", highlightCell);
    this.document.getElementById("animal-table").onmouseout = unHighlightCell;

    this.document.getElementById("btn-show").addEventListener("click", showAnimals);
    this.document.getElementById("btn-style").addEventListener("click", stylePara);
    this.setInterval(stylePara,1000);
}