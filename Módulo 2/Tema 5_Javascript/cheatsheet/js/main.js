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

// ----------------------- Funciones -----------------------------
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

// ------------------------------- DOM ---------------------------
console.log(document);
console.log(document.URL);
console.log(document.domain);
console.log(document.title);

document.getElementById("miBoton").addEventListener("click", buttonClick);
function buttonClick(e) {
    document.body.style.backgroundColor = "red";
}