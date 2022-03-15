// Punto 1
const mainDiv = document.getElementById("mainDiv");
const parrafo1 = document.createElement("p");
const parrafo2 = document.createElement("p");
parrafo1.textContent = "Primer párrafo";
parrafo2.textContent = "Segundo párrafo";
mainDiv.appendChild(parrafo1);
mainDiv.appendChild(parrafo2);

// Punto 2
const miBoton = document.querySelector("button");
miBoton.addEventListener("click", buttonClick);
miBoton.textContent = "Click para colorear fondo";

function buttonClick(envent) {
    document.body.style.backgroundColor = "lightblue";
}

// Punto 3
const miImg = document.getElementById("miImg");
document.querySelectorAll("a")[0].addEventListener("click",linkClick);
document.querySelectorAll("a")[1].addEventListener("click",linkClick);
document.querySelectorAll("a")[2].addEventListener("click",linkClick);

const selectLink = {
    link1: "https://cdn.pixabay.com/photo/2022/03/06/05/30/clouds-7050884_960_720.jpg",
    link2: "https://pixabay.com/es/photos/mar-arco%c3%adris-la-lluvia-subtropical-7039471/",
    link3: "https://pixabay.com/es/photos/tulipanes-flores-campo-cielo-6897351/",
}

function linkClick(event) {
    //miImg.src = selectLink[event.target.id];
    miImg.src = "https://pixabay.com/es/photos/tulipanes-flores-campo-cielo-6897351/"
}