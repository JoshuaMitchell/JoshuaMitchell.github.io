"using strict"

function toggleNav(){
    console.log("toggling");
    const navItems = document.getElementById("navitems");
    navItems.classList.toggle("hidden");
}

function toggleInfo(){
    const expandInfo = document.getElementById("expandInfo");
    expandInfo.hidden = !expandInfo.hidden;

    return false; // don't do default page behavior
}

function validateFirstName(){
    // if the error is showing, remove it
    let errorSpan = document.getElementById("errorFirstName");

    if (errorSpan != null) {
        errorSpan.remove();
    }

    // show an error when the value is blank
    if (this.value.trim() == "") {
        errorSpan = document.createElement("span");
        errorSpan.id = "errorFirstName";
        errorSpan.innerHTML = "* Blank";
        errorSpan.classList.add("error");
        this.after(errorSpan);
    }
}

window.onload = function(){
    const hamburger = document.getElementById("hamburger");
    hamburger.onclick = toggleNav;

    // hide more infor paragraph on page load
    const expandInfo = document.getElementById("expandInfo");
    expandInfo.hidden = true;

    // when link clicked, toggle the display of the paragraph
    const expandLink = document.getElementById("expandLink");
    expandLink.onclick = toggleInfo;

    const firstNameTxtBox = document.getElementById("txtFirstName");
    firstNameTxtBox.addEventListener("keyup", validateFirstName);
}