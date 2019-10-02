"using strict"

function toggleNav(){
    console.log("toggling");
    const navItems = document.getElementById("navitems");
    navItems.classList.toggle("hidden");
}

window.onload = function(){
    const hamburger = document.getElementById("hamburger");
    hamburger.onclick = toggleNav;
}