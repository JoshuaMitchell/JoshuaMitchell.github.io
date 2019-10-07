"using strict"

function displayCount() {
    // while loop from 1 to 10 and display the numbers in an unordered list
    // create ul

    ulElem = document.createElement("ul");
    contentElem = document.getElementById("content");
    //append ul to content
    contentElem.append(ulElem);

    let count = 1;

    while (count <= 10) {
        //create li
        liElem = document.createElement("li");
        liElem.innerText = count;
        // append li to the ul
        ulElem.append(liElem);
        count++;
    }
}

function displayLinks() {
    let linksElem = document.getElementById("links");

    for (let i=1; i <= 5; i++) {
        aElem = document.createElement("a");
        linksElem.append(aElem);
        aElem.innerHTML = `Page${i}`;
        aElem.href = `#${i}`;
        console.log(i);
    }
}

function displayTimesTables() {
    //insert table after button
    let tableElem = document.createElement("table");
    this.after(tableElem);

    //loop through and create the rows
    for (let row = 1; row <= 10; row++) {
        let tableRow = document.createElement("tr");
        tableElem.append(tableRow);

        for (let col=1; col <= 10; col++) {
            let tableCol = document.createElement("td");
            tableElem.append(tableCol);
            tableCol.innerHTML = row*col;
        }
    }
}

window.onload = function() {
   this.displayCount(); 
   this.displayLinks();

   let multBtn = document.getElementById("mult-btn");
   multBtn.onclick = displayTimesTables;
}