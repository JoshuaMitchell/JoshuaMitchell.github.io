"using strict"

async function displayMovies() {
    let response = await fetch("https://portiaportia.github.io/csce242/json/movies.json");
    let moviesJson = await response.json();
    let contentDiv = document.getElementById("content");

    for (i in moviesJson) {
        let movie = moviesJson[i];
        contentDiv.append(getMovieItem(movie));
    }
}

function getMovieItem(movie) {
    let movieSection = document.createElement("section");
    movieSection.className = "movie";
    let imageBlock = document.createElement("div");
    movieSection.append(imageBlock);
    let movieTitle = document.createElement("h3");
    imageBlock.append(createMovieImg(movie.img));
    movieTitle.innerHTML = movie.title;
    movieSection.append(movieTitle);
    movieSection.append(createMoviePara("<b>Director:</b> " + movie.director));
    movieSection.append(createMoviePara("<b>Actors:</b> " + movie.actors));
    movieSection.append(createMoviePara("<b>Year:</b> " + movie.year));
    movieSection.append(createMoviePara("<b>Genres:</b> " + movie.genres));
    movieSection.append(createMovieDesc(movie.description));

    return movieSection;
}

function createMovieDesc(dText) {
    let movieD = document.createElement("span");
    movieD.innerHTML = dText;

    return movieD;
}

function createMoviePara(pText) {
    let movieP = document.createElement("p");
    movieP.innerHTML = pText;

    return movieP;
}

function createMovieImg(img) {
    let movieImg = document.createElement("img");
    movieImg.src = "https://portiaportia.github.io/csce242/json/" + img;

    return movieImg;
}

window.onload = function() {
    this.displayMovies();
}