// Probando JS externo
function hey() {
    alert("Hey, soy el cuarto enlace");
} ;
document.getElementsByTagName("a")[3].addEventListener("click",hey);

// ----------------- Variables -----------------//
// var -> scope function (está en desuso)
// let -> scope del bloque del código
function saludar() {
    for (var i=0; i<5;i++) {
        console.log(i);
    }
    console.log(i," fuera del for");
}
saludar();

// const -> scope de bloque de código
const num1 = 1;
//num1 = 2; daría error al tratarse de una constante que no se puede modificar
let var1, var2, var3;

// --------------- Tipos de datos ------------------//
const name = "John"; // String
const age = "30"; // Number
const height = "1.8" // Number
const isApproved = false; // Boolean
const varUndefined = undefined; // Undefined
let varUndefined2; // Undefined, ponemos let porque no se puede dejar una constante sin inicializar
const selectedOption = null; // Null

console.log(typeof name, name);
console.log(typeof age, age);
console.log(typeof height, height);
console.log(typeof isApproved, isApproved);
console.log(typeof varUndefined, varUndefined);
console.log(typeof varUndefined2, varUndefined2);
console.log(typeof selectedOption, selectedOption);

// ------------------ Strings ---------------------//
let str = "Hola mundo. ";
console.log(str,str.length);

let str2 = str + "Hola JS.";
console.log(str2, str2.length);

str2 = str.concat("Hola JS.");
console.log(str2, str2.length);

console.log("Hola aparece en el indice", str2.indexOf("Hola"));
console.log("Hola aparece en el indice", str2.lastIndexOf("Hola"));

console.log(str2.substring(5,12));

const wordToSearch = "Hola";

let indexOfHola = str2.indexOf(wordToSearch);
let lastIndexOfHola = str2.lastIndexOf(wordToSearch) + wordToSearch.length;
let stringToPrint = str2.substring(indexOfHola, lastIndexOfHola);
console.log(stringToPrint);

let str3 = "Hola";
str3 +=  " Mundo."; //str3 = str3 + " Mundo"
console.log(str3, str3.length);

console.log(str.toUpperCase());
console.log(str.toLowerCase());

console.log(str.replace("mundo", "peña"));

console.log(`${name} tiene ${age} años.`);

console.log ("Hola futuro.".split(" ").join("-"));

// Parsing - Cambio de dato
console.clear();
let num3 ="1000";
console.log(typeof num3,num3);
console.log(typeof parseInt(num3), parseInt(num3));
console.log(typeof parseFloat(num3), parseInt(num3));
console.log(typeof Number(num3), Number(num3));

console.log("1000" + 1000, typeof("1000" + 1000));
console.log(1000 + + "1000", typeof(1000 + "1000"));
console.log("1000" * 1, typeof("1000" * 1));

// ------------- Objetos -------------------
const car1 = {
    brand: "BMW",
    weigh: 2200,
    owner: "John",
    year: 2019,

    changeOwner (owner) {
        this.owner = owner;
    }
};

const car2 = {
    brand: "Volvo",
    weigh: 2800,
    year: 2010,
    owner: {
        name: "Jane",
        lastName: "Smith",
        address: {
            street: "Calle Larios",
            numer: 2,
            citiy: "Málaga",
        },
        age: 30,
        children: [{name:"John"}, {name: "Peter"}],
    },
    length: 3.1,
};

console.log(car2.owner.children[0].name);

car1.owner = "Otro dueño";

console.log(typeof car1);
console.log(car1.brand, car1.weigh, car1.owner, car1.year);
console.log(car2.brand, car2.weigh, car2.owner, car2.year);

let inputAttribute = "year";
console.log(car1[inputAttribute]);

const users = [
    {
        id: 1,
        userName: "u1",
    },
    {
        id: 2,
        userName: "u2",
    }
];

// Constructores de objetos utilizando funciones
// ** Hace falta entender las funciones primero
function Car(brand, color, weight, topSpeed) {
    this.brand = brand;
    this.color = color;
    this.weight = weight;
    this.topSpeed = topSpeed;

    this.description = () => `Este ${this.brand} ${this.color} pesa ${this.weight}kg` +
    ` y puede llegar a los ${this.topSpeed}km/h`;
} // Pre ES5

const miCoche1 = new Car("BMW", "red", 1800, 230);
const miCoche2 = new Car("Volvo", "azul", 2000, 210);
console.log(miCoche1, miCoche2);
console.log(miCoche1.description());
console.log(miCoche2.description());

for (let propiedad in miCoche1) {
    console.log(propiedad);
}

for (let key of Object.keys(miCoche1)) {
    console.log(key);
}
for (let key of Object.values(miCoche1)) {
    console.log(key);
}

miCoche1.year = 2019;

if ("year" in miCoche1) {
    console.log("El coche tiene el año especificado");
}


//------------------- Arrays ---------------------
let selectedColors = ["red", "blue", "purple", "green", "white", "cyan"];
console.log(typeof selectedColors, selectedColors, selectedColors.length);
console.log(selectedColors[0]);
console.log(selectedColors[1]);
console.log(selectedColors[2]);
console.log(selectedColors[3]);
console.log(selectedColors[4]);
console.log(selectedColors[5]);
console.log(selectedColors[6]); // undefined, no da error

// Añadir elementos
selectedColors[6] = "brown";
selectedColors.push("yellow");
selectedColors.unshift("pink");

console.log(typeof selectedColors, selectedColors, selectedColors.length);

//Eliminar elementos
selectedColors.shift(); // Elimina pink
selectedColors.pop(); // Elimina yellow
console.log(typeof selectedColors, selectedColors, selectedColors.length);
selectedColors.splice(1,1); // Elimina blue

console.log(typeof selectedColors, selectedColors, selectedColors.length);

// Búsqueda
console.log(selectedColors.indexOf("red"));
console.log(selectedColors.lastIndexOf("red"));

// Ordenar
selectedColors.sort();
console.log(selectedColors);

//-------------------------------- Condicionales ------------------------
let datoLogico = true;
if (datoLogico && 5 < 6 && true && "5" && !(5 ==="5")) {
    console.log("Condicional que siempre es verdadero");
} else if(datoLogico) {
    console.log("Otras acciones");
} else {
    console.log("No se ha cumplido ninguna de las condiciones");
}

// Ternary operators
let nota = 7;
datoLogico = nota >=5 ? "Aprobado" : "Suspendido";
console.log(datoLogico);

// Switch
let option = 3;
switch (option) {
    case 1:
        console.log("Opción 1");
        break;
    case 2:
        console.log("Opción 2");
        break;
    case 3:
        console.log("Opción 3");
        break;
    default:
        console.log("Opción no existente");
        break;
}

// ------------------------- Funciones -----------------------------
function suma(num1, num2){
    return num1 + num2;
};

console.log(suma(2, 2));

function esPar(num) {
    const esPar = num % 2 === 0;
    return esPar;
};

console.log(esPar(2));
console.log(esPar(3));

// Función anónima
let saludar2 = function () {
    console.log("Hey");
};
saludar2();

console.log(typeof saludar2);

// Función anónima como expresión
let result = function(num1, num2) {return num1 + num2;} (2,2);
console.log(result);

// Arrow functions
const perimeterOfSquare = function (side) {
    return side * 4;
};
let perimeter = perimeterOfSquare(5);
console.log(perimeter);

const perimeterOfSquareArrow = (side) => (side * 4);
let perimeter2 = perimeterOfSquareArrow(5);
console.log(perimeter);

// ES6
var numArray = [14000, 104, 99];
numArray.sort((a,b) => a - b); // For ascending sort
console.log(numArray);
numArray.sort((a,b) => b - a); // For ascending sort
console.log(numArray);

// ----------------------- Bucles -----------------------------
// For
for (let i = 1; i < 6; i++) {
    console.log(i);
}

// While
let i = 1;
while (i < 6) {
    console.log("Esta vez con while: ", i);
    i++;
}

// forEach
selectedColors.forEach(myFunction);
function myFunction(item, index) {
    console.log(`Elmento ${index} es: ${item}`);
}

// forEach con anónima
selectedColors.forEach(function(item, index) {
    console.log(`forEach con anónima: Elemento ${index} es: ${item}`)
});

// Los anterioriores forEach son equivalentes al siguiente for
for (let i = 0; i < selectedColors.length; i++) {
    console.log(`FOR común: Elemento ${i} es: ${selectedColors[i]}`);
}

// For ... of
for (let color of selectedColors) {
    console.log(`FOR .. OFF: ${color}`);
}

// break rompe un bucle en concreto
let k = 0;
let z = 0;

labelBreakLoop: while (true) {
    console.log("Outer loop: ", k);
    k++;
    z = 0;
    while(true) {
        console.log("Inner loops: ",z);
        z++;
        if (z === 10 && k === 10) {
            break labelBreakLoop;
        } else if (z === 10) {
            break;
        }
    }
}
console.log("Se acabó");

// continue para saltarse una iteración en concreto
for (let i = 0; i < 5; i++) {
    if (i === 3)
        continue;
    console.log("Using continue: ", i);
}

// ------------------------------- DOM ---------------------------
// Aspectos básicos
console.log(document);
console.log(document.URL);
console.log(document.domain);
console.log(document.title);
console.log(document.links);
console.log(document.images);

document.getElementById("miBoton").addEventListener("click", buttonClick);
function buttonClick(e) {
    document.body.style.backgroundColor = "red";
}

// Selectores
const contenedores = document.getElementsByTagName("div");
const grandparent = contenedores [0];
const grandparent2 = contenedores["grandparent"];
const grandparent3 = contenedores.grandparent;

const parents = document.getElementsByClassName("parent");
let parent1 = parents [0];
parent1 = parents["parent1"];
parent1 = parents.parent1;

const child1 = document.getElementById("child1");

const child2 = document.querySelector("div#grandparent.grandparent>.parent#parent1>#child2");
const children = document.querySelectorAll(".child");

child1.innerHTML = "<span style='color:red;'>Child ONE</span>";
child2.textContent += "!";
child1.style.backgroundColor = "gray";

// Creación de elementos
let newDiv = document.createElement("div");
newDiv.id = "identificador";
newDiv.setAttribute("title", "divTitle");
newDiv.title = "divTitle";
newDiv.textContent = "Child 2.5";
newDiv.innerText = "Child 2.5"; // Similar a textContent pero respeta estilos.

// Modificacion de CSS
newDiv.style.backgroundColor = "red";
newDiv.style.border = "2px solid black";
newDiv.style.cssText = "background-color: red; color: white;"; //Este método no es muy recomendable

newDiv.className = "btn btn-primary";
newDiv.className += "newClass";
// Recomendado + buena práctica
newDiv.classList.add("otherClass");
newDiv.classList.remove("newClass");
newDiv.classList.toggle("newClass");
newDiv.classList.toggle("newClass");

// Anexarlo en los hijos
parent1.appendChild(newDiv);
parent1.appendChild(newDiv); // Sobreescribe al primero, no puede haber 2 instancias del mismo nodo
const otherDiv = newDiv.cloneNode(true);
otherDiv.id = "otherID";
otherDiv.textContent = "Other Div";
//parent1.prepend(otherDiv);
//parent1.insertBefore(otherDiv, child2);

// Anexarlo al mismo nivel
//parent1.after(otherDiv);
parent1.before(otherDiv);

// Eliminar nodes / elementos
otherDiv.remove();

// Eventos
const miBoton = document.querySelectorAll("button")[0];
miBoton.addEventListener("click", buttonClick);

function buttonClick(envent) {
    miBoton.textContent = "Nuevo Texto";
}

document.querySelectorAll("button")[1].addEventListener("click", buttonClickColor);
document.querySelectorAll("button")[2].addEventListener("click", buttonClickColor);
document.querySelectorAll("button")[3].addEventListener("click", buttonClickColor);

const buttonSetting = {
    boton1: "red",
    boton2: "yellow",
    boton3: "blue",
}

function buttonClickColor(event) {
    document.body.style.backgroundColor = buttonSetting[event.target.id];
    console.log(`Alt: ${event.altKey} || Ctrl: ${event.ctrlKey} || Shift: ${event.shiftKey} ||`);
}


const h2 = document.querySelector("h2");
document.body.addEventListener("mousemove", updateCoords);
function updateCoords (event) {
    h2.textContent = `Coordenadas: X:${event.x} Y:${event.y}`
}

const input = document.querySelector("input");
input.addEventListener("focus", logEvent);
input.addEventListener("blur", logEvent);
input.addEventListener("keyup", logEvent);

function logEvent(e) {
    console.log(e.type);
    if (e.type === "focus") {
        e.target.style.backgroundColor = "red";
    } else if (e.type === "blur") {
        e.target.style.backgroundColor = "white";
    } else {
        input.previousElementSibling.textContent = e.target.value;
    }
}

// Aspectos más avanzados - Higher order functions
// Map
let array1 = [1,2,3];
let array2 = [];
console.log("Array 1: ", array1);

// Quiero que dado el array1, me copie el doble en el array2
for (let i = 0; i < array1.length; i++) {
    array2.push(array1[i]*2);
}
console.log("Array 2 con for: ",array2);

// Ahora hago lo mismo con map
array2 = array1.map(function (value, index) {
    return value * 2;
});
console.log("Array 2 con map:",array2);

// A partir de un array de años de nacimiento
// generar otro, pero con las edades
let birthdays = [1975, 1978, 2009];
let ages = [];
const thisYear = new Date().getFullYear();

ages = birthdays.map(function(value,index) {
    return thisYear - value;
});
console.log("Edades: ",ages);

ages = birthdays.map(value => thisYear - value);
console.log("Edades con función flecha: ", ages);

// Filter
// Este ejemplo copia a otro array solo los precios mayores que 50
let prices = [150,50,49,51,15,237];
let expensivePrices = [];

for (let price of prices) {
    if (price >= 50) {
        expensivePrices.push(price);
    }
}
console.log("Forma convencional: ", expensivePrices);

expensivePrices = prices.filter(price => price >= 50);
console.log("Con filter: ",expensivePrices);

// A partir de un Array de personas (objetos) con nombre y edad, filtrar
// aquellas mayores de edad
const people = [
    {name: "Juan", age: 21,},
    {name: "Fran", age: 7,},
    {name: "Maria", age: 39,},
    {name: "Sofia", age: 18,},
]
console.log(people);

const adults = people.filter(person => person.age >= 18);
console.log (adults);

// Ahora vamos a mostrar el nombre de los adultos.
const adultNames = adults.map(person => person.name);
console.log(adultNames);

// Reduce
// Para obtener la suma acumulada de un array
const arr1 = [10, 7, 13, 20];
const suma1 = arr1.reduce((sumaAcumulada,number) => sumaAcumulada + number, 0);
console.log(suma1);

// Sort
// Para ordenar un array
/*arr1.sort(function (a,b) {
    if (a > b) {
        return 1;
    } else if (a < b) {
        return -1;
    } else {
        return 0;
    }
});*/
/*arr1.sort(function (a,b) {
    return a - b;
});*/
arr1.sort((a,b) => a - b);
console.log(arr1);

//const orderedPeople = people.sort((person1, person2) => person1.age - person2.age);
//console.log(orderedPeople);
people.sort((person1,person2) => person1.age - person2.age);
console.log(people);