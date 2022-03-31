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

function getUrl (event) {
    miImg.src = event.target.textContent;
}

document.getElementById("lista").addEventListener("click",getUrl);

// Punto 4
const btnText = document.getElementById("btnTxt");
const myInput  = document.querySelector("input");
const divPunto4 = document.getElementById("divPunto4");
const parrafoInput = document.createElement("p");

btnText.addEventListener("click", () => parrafoInput.textContent = myInput.value);
divPunto4.appendChild(parrafoInput);

//Punto 4.2
const myInput42  = document.getElementById("input42");
const divPunto42 = document.getElementById("divPunto42");
const parrafoInput42 = document.getElementById("parrafo42");

myInput42.addEventListener("input", function(event){
    parrafoInput42.textContent = event.target.value;
});

// Punto 5
let textArea5 = document.getElementById("textArea5");
let btn5 = document.getElementById("btn5");
let parrafo5 = document.getElementById("parrafo5");
btn5.addEventListener("click", countText);

function countText(event) {
    if (textArea5.value.length > 15) {
        parrafo5.textContent = ("El contenido del área de texto es mayor de 15 carácteres");
    } else {
        parrafo5.textContent = ("El contenido del área de texto es menor de 15 carácteres");
    }
}

// Punto 6
let input6 = document.getElementById("input6");
let bnt6 = document.getElementById("btn6");
bnt6.addEventListener("click",esPar);

function esPar(event) {
    if (input6.value % 2 === 0) {
        input6.style.borderColor = "red";
        alert("El número es par");
    } else input6.style.border = "revert";
}

// Punto 7
let lista7 = document.getElementById("lista7");
let arrayLi = [];

for (i = 1; i < 11; i++) {
    arrayLi[i] = document.createElement("li");
    arrayLi[i].textContent = 'Elemento ' + i;
    lista7.appendChild(arrayLi[i]);
}

// Punto 7 otra opción
const lista72 = document.getElementById("lista72");

for (i = 1; i < 11; i++) {
    let miLi = document.createElement("li");
    miLi.textContent = `Elemento ${i}`;
    lista72.appendChild(miLi);
}