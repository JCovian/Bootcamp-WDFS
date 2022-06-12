// Punto 1
const mainDiv = document.getElementById("mainDiv");
const parrafo1 = document.createElement("p");
const parrafo2 = document.createElement("p");
parrafo1.textContent = "Primer párrafo";
parrafo2.textContent = "Segundo párrafo";
mainDiv.appendChild(parrafo1);
mainDiv.appendChild(parrafo2);
// Podriamos anexar los dos elementos con append
// mainDiv.append(parrafo1, parrafo2);

// Punto 2
const miBoton = document.querySelector("button");
miBoton.addEventListener("click", buttonClick);
miBoton.textContent = "Click para colorear fondo";

function buttonClick(envent) {
    document.body.style.backgroundColor = "lightblue";
}
// Mejor acerlo así:
// miBoton.addEventListener("clisk", function() {
//     document.body.style.backgroundColor = "red";
// });

// Solución alternativa con arrow function
//miBoton.addEventListener("click", () => document.body.style.backgroundColor = red);

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

function countText() {
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

function esPar() {
    if (input6.value % 2 === 0) {
        input6.style.border = "revert"
        alert("El número es par");
    } else input6.style.borderColor = "red";
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

// Punto 8
let btn8 = document.getElementById("boton8");
let link8 = document.getElementById("enlace8");
let pulsado = false;
btn8.addEventListener("click",pulsadoOn);
link8.addEventListener("click",ventanaNueva);

function pulsadoOn(event) {
    pulsado = true;
}

function ventanaNueva(event) {
    if (pulsado === true) {
        pulsado = false;
        //link8.setAttribute("target","_blank"); 
        link8.target = "_blank";
    }
}

// Punto 9
let parrafo9 = document.getElementById("parrafo9");
//let selector9 = document.getElementById("selector9");
//selector9.addEventListener("change",cambiaColor);

/*function cambiaColor(event) {
    let color = selector9.options[selector9.selectedIndex].value;
    console.log(color);
    switch (color) {
        case "negro":
            parrafo9.setAttribute("style","color: black");
            break;
        case "blanco":
            parrafo9.setAttribute("style","color: white");
            break;
        case "rojo":
            parrafo9.setAttribute("style","color: red");
            break;
        case "amarillo":
            parrafo9.setAttribute("style","color: yellow");
            break;
        case "verde":
            parrafo9.setAttribute("style","color: green");
            break;
        case "azul":
            parrafo9.setAttribute("style","color: blue");
            break;
    }
}*/
document.querySelector("#selector9").addEventListener("change", e => {
    parrafo9.style.color = e.target.value;
});

// Punto 10
const numero = document.getElementById("numRandom");
const total = document.getElementById("numTotal");
const impares = document.getElementById("numImpares");
const pares = document.getElementById("numPares");
let btn10 = document.getElementById("btn10");

btn10.addEventListener("click",addRandom);

function generaRandom () {
    //return Math.floor((Math.random() * (1000 - 0 +1)) + 0);
    return Math.floor(Math.random() * 1000);
    //return parseInt(Math.random() * 1000);
}

function addRandom () {
    numero.textContent = generaRandom();
    //total.textContent = Number(total.textContent) + 1;
    total.textContent ++;
    if (numero.textContent % 2 == 0) {
        //pares.textContent = Number(pares.textContent) + 1;
        pares.textContent ++;
    } else impares.textContent ++; //impares.textContent = Number(impares.textContent) + 1;
}

// Punto 11
const lista11 = document.getElementById('lista11');
const btn11 = document.getElementById('btn11');
btn11.addEventListener("click",generaLista);

function generaLista() {
    const num11 = lista11.nextElementSibling.value;
    const listItems = Array.from(lista11.children);

    let existeEnLista = false;
    listItems.forEach(element => {
        if (element.textContent == num11)
            existeEnLista = true;
    });

    if (existeEnLista) {
        alert("El número ya existe");
    } else {
        const newLi = document.createElement("li");
        newLi.textContent = num11;
        lista11.appendChild(newLi);
    }
}

// Punto 12
const btn12 = document.getElementById('btn12');
btn12.addEventListener("click",eliminaClase);

function eliminaClase () {
    btn12.classList.toggle("btn");
}

// Apartado Extra: Refactorizar código
const buttons = document.getElementsByClassName('btn13'); // Devuelve HTML collection

/*buttons[0].addEventListener('click', () => {
    buttons[0].style.backgroundColor = "red";
});

buttons[1].addEventListener('click', () => {
    buttons[1].style.backgroundColor = "red";
});

buttons[2].addEventListener('click', () => {
    buttons[2].style.backgroundColor = "red";
});*/

// Solución 1:
Array.from(buttons).forEach(button => button.onclick = e => e.target.style.backgroundColor = "red");

// Solución 2:
buttons = document.querySelectorAll("btn13"); //Devuelve Nodelist que tiene disponible forEach
button.forEach(button => {
    button.addEventListener("click", function(e) {
        e.target.style.backgroundColor = "red";
    });
});