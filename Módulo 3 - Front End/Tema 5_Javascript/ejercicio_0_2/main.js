// 1.Define e inicializa un array con 5 elementos string en una sola linea
console.log("********** Apartado 1 ***********");
const stringArray = ["uno","dos","tres","cuatro","cinco"];
console.log(stringArray);

// 2.Define array vacio. Añadir 3 elementos tipo number posteriormente, eliminar por completo
// el primero y añadir dos números nuevos al inicio. En cada paso, imprime la longitud y el array
// entero por consola utilizando un string template del tipo: 'Longitud: ${}'
console.log("");
console.log("********** Apartado 2 ***********");
const numberArray = [];
console.log(`Este array tiene longitud ${numberArray.length} con el siguiente contenido: ${numberArray}`);

/*numberArray[0] = 15;
numberArray[1] = 6;
numberArray[2] = 21;*/
numberArray.push(15,6,21);
console.log(`Este array tiene longitud ${numberArray.length} con el siguiente contenido: ${numberArray}`);

numberArray.shift();
console.log(`Este array tiene longitud ${numberArray.length} con el siguiente contenido: ${numberArray}`);

numberArray.unshift(4,2);
console.log(`Este array tiene longitud ${numberArray.length} con el siguiente contenido: ${numberArray}`);

// 3.Escribe una función nombrada que devuelva true si el argumento dado es de tipo boolean y false en
// caso contrario.
console.log("");
console.log("********** Apartado 3 ***********");

/*function comprobarBooleano(valor) {
    if (typeof valor === "boolean") {
        return true;
    } else return false;
}*/

function comprobarBooleano(valor) {
    return typeof valor === "boolean";
}

//const comprobarBooleano = (valor) => typeof valor === ("boolean");

console.log(comprobarBooleano(true));
console.log(comprobarBooleano("true"));
console.log(comprobarBooleano(2));

// 4.Escribe una función que devuelva la longitud de un string recibido por argumento.
console.log("");
console.log("********** Apartado 4 ***********");

const longitudString = (value) => value.length;

console.log(longitudString("A"));
console.log(longitudString("Ahora un texto más largo"));

// 5.Crea una función de flecha que reciba una cantidad de minutos y lo devuelva convertido en segundos.
console.log("");
console.log("********** Apartado 5 ***********");
let minutos;

const calculaSegundos = (minutos) => minutos * 60;

minutos = 1;
console.log(`${minutos} minuto son ${calculaSegundos(minutos)} segundos.`);
minutos = 6;
console.log(`${minutos} minutos son ${calculaSegundos(minutos)} segundos.`);
minutos = 60;
console.log(`${minutos} minutos son ${calculaSegundos(minutos)} segundos.`);
minutos = 100;
console.log(`${minutos} minutos son ${calculaSegundos(minutos)} segundos.`);

// 6.Crea una función que reciba un número y devuelva el siguiente número par. (Si él es par, lo devolverá
// directamente).
console.log("");
console.log("********** Apartado 6 ***********");

/*function checkPar (numero) {
    if (numero % 2 === 0) {
        return numero;
    } else return numero + 1;
}*/

const checkPar = (numero) => numero % 2 === 0 ?  numero :  numero + 1;

console.log(checkPar(4));
console.log(checkPar(9));

// 7.Crea una función que reciba una edad y devuelva la cantidad de días que esa persona ha vivido. Puedes
// obviar los años bisiestos.
console.log("");
console.log("********** Apartado 7 ***********");

const calculaDiasVividos = (edad) => edad * 365;

console.log(`Ha vivido ${calculaDiasVividos(46)} días.`);

// 8.Crea una función que reciba un array y devuelva su último elemento. Prueba tu función con varios arrays
//de diferentes longitudes.
console.log("");
console.log("********** Apartado 8 ***********");
const array8a = ["Pepe",2,"Juan",false,58,true];
const array8b = ["Elena","Rogelia","Francisca","Juana","Robustiana","Maria"];
const array8c = [14,8,101];

const ultimoElementoArray = (unArray) => unArray.pop();

console.log(`El ultimo elemento del Array es: ${ultimoElementoArray(array8a)}`);
console.log(`El ultimo elemento del Array es: ${ultimoElementoArray(array8b)}`);
console.log(`El ultimo elemento del Array es: ${ultimoElementoArray(array8c)}`);

// 9.Un granjero necesita contar la cantidad de patas de los animales en sus diferentes granjas muy
// frecuentemente, pero tiene tres especies: pollos (2 patas), vacas (4 patas) y cerdos (4 patas). Tu función
// recibirá la cantidad de animales en ese orden y devolverá la cantidad de patas totales. Ejemplo:
// countLegs (5,2,8); //output: 50
console.log("");
console.log("********** Apartado 9 ***********");

const contarPatas = (pollos,vacas,cerdos) => (pollos * 2) + (vacas * 4) + (cerdos * 4);

console.log(`Hay un total de ${contarPatas(5,2,8)} patas.`);

// 10.Crea una función que determine si dos datos recibidos por argumentos son del mismo tipo.
console.log("");
console.log("********** Apartado 10 ***********");

const compruebaTipoDato = (dato1,dato2) => typeof dato1 === typeof dato2;

compruebaTipoDato(true,false) ? console.log("Ambos datos son del mismo tipo") : console.log("Son datos de distinto tipo");

// 11.Crea una función que reciba un string con una frase y devuelva un array donde cada elemento será una
//palabra de la frase original. Investigar método existente de los strings para este fin.
console.log("");
console.log("********** Apartado 11 ***********");

const convierteStringArray = (unString) => unString.split(" ");

const array11 = convierteStringArray("Esto es una prueba");
console.log(array11);

// 12. Inicializa dos objetos, address1 y address2 con las propiedades: provincia, ciudad, municipio, código
//postal, calle, número, planta, y número de puerta.
console.log("");
console.log("********** Apartado 12 ***********");
let address1 = {
    provincia: "",
    ciudad: "",
    municipio: "",
    cp: "",
    calle: "",
    numero: "",
    planta: "",
    puerta: ""
};
let address2 = {
    provincia: "",
    ciudad: "",
    municipio: "",
    cp: "",
    calle: "",
    numero: "",
    planta: "",
    puerta: ""
};
console.log(address1,address2);

// 13.Los dominios en la web, se componen del nombre de dominio (codespaceacademy) y de un TLD (top
//level domain) como, por ejemplo .com / .es / .org, etc. Crea una función que se llame parseDomain() que
//reciba por argumento un string y devuelva un objeto con dos propiedades: domain y tld. Ejemplo:
console.log("");
console.log("********** Apartado 13 ***********");

function parseDomain(unString) {
    let array13 = unString.split(".");
    let dominio ={
        domain: array13[0],
        tld: array13[1]
    };
    return dominio;
}

const parseDomainFlecha = unString => {return {domain: unString.split(".")[0], tld: unString.split(".")[1]}};

console.log (parseDomain("covian.es"));
console.log (parseDomainFlecha("google.com"));

// 14.Nos han prohibido el uso del operador de igualdad estricta (===), pero queremos poder seguir utilizando
// dicha esa funcionalidad. Crea una función que devuelva true si dos números tienen el mismo valor y el
// mismo tipo de dato. Debemos usar el operador lógico “&&”. Prueba tu función con dos estos inputs:
// strictEquality("5",5); // false
// strictEquelity(5,4); // true
console.log("");
console.log("********** Apartado 14 ***********");

/*function strictEquality(value1, value2) {
    if (value1 == value2 && typeof value1 == typeof value2) {
        return true;
    } else return false;
}*/

const strictEquality = (valor1,valor2) => valor1 == valor2 && typeof valor1 == typeof valor2;// ? true : false;

console.log(strictEquality("5",5));
console.log(strictEquality(5,5));
console.log(strictEquality(3,5));
console.log(strictEquality("5","5"));
console.log(strictEquality("4","5"));

// 15.Crea una función que reciba dos strings y devuelva true si tienen la misma longitud y false en caso contrario.
console.log("");
console.log("********** Apartado 15 ***********");

const checkLongStr = (str1,str2) => str1.length === str2.length; // ? true:false;
console.log(checkLongStr("String uno","String dos"));
console.log(checkLongStr("String uno","String dos plus"));

// 16.Crea una función que reciba un string y determine si está vacío sin utilizar la propiedad length.
console.log("");
console.log("********** Apartado 16 ***********");

const checkEmptyStr = (str) => str.localeCompare("");
checkEmptyStr ("") ? console.log("El string no está vacío") : console.log("El string está vacío");
checkEmptyStr (" ") ? console.log("El string no está vacío") : console.log("El string está vacío");

const isEmpty = function (str) {
    //return str === "" || str === undefined;
    return str ? false : true; // falsy values
}

console.log(isEmpty(""));
console.log(isEmpty());
console.log(isEmpty("Algo"));

// 17.Imprimir elemento a elemento el array del apartado 1 de cuatro formas diferentes: (stringArray)
// while, for, for of, forEach
console.log("");
console.log("********** Apartado 17 ***********");

console.log("-- Manera forEach --");
stringArray.forEach(element => {
    console.log(element);
});

console.log("-- Manera for --");
for (let i = 0; i < stringArray.length; i++) {
    console.log (stringArray[i]);
}

console.log("-- Manera for of --");
for (const value of stringArray) {
    console.log(value);
}

console.log("-- Manera while --");
let n = 0;
while (n < stringArray.length) {
    console.log(stringArray[n]);
    n++;
}

// 18.Crea una función que reciba un string y un número N y devuelva el string original repetido N veces.
console.log("");
console.log("********** Apartado 18 ***********");

const repeatString = (unString,n) => unString.repeat(n);
console.log(repeatString("No haré memes sobre el profesor. ",2));

// 19.Crea una función que recibe un objeto con dos campos, votos positivos y votos negativos y que devuelva
// la cuenta final
console.log("");
console.log("********** Apartado 19 ***********");

const getVoteCount = objeto19 => objeto19.upVotes - objeto19.downVotes;

console.log(getVoteCount({upVotes:35, downVotes:15}));

// 20.Crea una función que recibe un array de tipos de datos mezclados y devuelva otro array con el tipo
// de cada uno de los elementos.
console.log("");
console.log("********** Apartado 20 ***********");

function getTypes(unArray) {
    let array20 = [];
    unArray.forEach(function(elemento) {
        array20.push(typeof (elemento));
    });
    return array20;
}
console.log(getTypes(["I'm learning JS in a Bootcamp", 7.5, {}, 0, undefined, [],"codespace"]));

// 21.Función que dado un array de números con formato string devuelva un array con los números ya
// parseados.
console.log("");
console.log("********** Apartado 21 ***********");

function getParsedNumbers(unArray) {
    let array21 = [];
    unArray.forEach(function(elemento) {
        array21.push(parseFloat(elemento)); // Si utilizamos Number en vez de parseFloat no
    });                                     // hay que preocuparse de si es entero o decimal                                   
    return array21;
}

console.log(getParsedNumbers(["1.5","10","0"]));

// 22.Crea una función de flecha que devuelva “Positivo” si el número que recibe por argumento es mayor o
// igual que cero y “Negativo” en caso contrario. Usa el operador ternario
console.log("");
console.log("********** Apartado 22 ***********");

const isPositive = number => number >= 0 ? "Positivo" : "Negativo";

console.log(isPositive(0));
console.log(isPositive(2));
console.log(isPositive(-1));

// 23.Crea una función que dado un array cualquiera y un índice, borre el elemento guardado en ese índice.
console.log("");
console.log("********** Apartado 23 ***********");

function borrarArrayPorIndice(unArray,indice) {
    unArray.splice(indice,1);
    return unArray;
}
console.log(borrarArrayPorIndice([1, 5, 6, 7, 5], 2));

// 24.Usando la función del apartado anterior, crea otra función que dado un array de números y un número a
// filtrar, devuelva un array borrando todos las apariciones de dicho número.
console.log("");
console.log("********** Apartado 24 ***********");

function filterNumber(unArray,numero) {
    unArray.forEach(function(elemento,indice) {
        elemento === numero ? borrarArrayPorIndice(unArray,indice) : false;
    });
    return unArray;
}

console.log(filterNumber([1, 5, 5, 6, 7, 5], 5)); //output [1, 6, 7]

// 25.Crea dos funciones que recibirán un objeto, la primera devolverá un array con los nombres de todas sus
// propiedades. La segunda devolverá un array con los valores de dichas propiedades.
// Investigar los métodos keys y values del prototipo de Object.
console.log("");
console.log("********** Apartado 25 ***********");

let miCoche = {
    marca: "Peugeot",
    modelo: "308 SW",
    version: "GT",
    año: 2016
}

const propieadesObjeto = unObjeto => Object.keys(unObjeto);
const valoresObjeto = unObjeto => Object.values(unObjeto);

console.log(propieadesObjeto(miCoche));
console.log(valoresObjeto(miCoche));

// 26.Crea una función que invierta un string
console.log("");
console.log("********** Apartado 26 ***********");

const stringReverse = unString => unString.split("").reverse().join("");

console.log(stringReverse(".nóicamargorp ed sedrat sal ne éfac led érasuba oN")); 
// Output: No abusaré del café en las tardes de programación.

// 27.Crea una función que compare strings sin tener en cuenta las mayúsculas / minúsculas.
console.log("");
console.log("********** Apartado 27 ***********");

const compareString = (str1, str2) => str1.toUpperCase() === str2.toUpperCase();

console.log(compareString("Darth CODER", "darth coder")); // output: true

// 28.Crea una función que convierta en mayúscula sólo la primera letra de cada palabra de un string
// dado. El apartado 11 será de ayuda. Investigar como unir un array de strings en un único string.
console.log("");
console.log("********** Apartado 28 ***********");

function capitalize(unString) {
    let arrayString = unString.split(" ");
    arrayString.forEach(function(element,index) {
        arrayString[index] = element.charAt(0).toUpperCase() + element.slice(1);
    });
    return arrayString.join(" ");
}

console.log(capitalize("comprobaré los errores de la consola antes de pedir ayuda."));
// output: "Comprobaré Los Errores De La Consola Antes De Pedir Ayuda."

// 29. Crea una función en una única línea que reciba un valor lógico y devuelva el opuesto.
console.log("");
console.log("********** Apartado 28 ***********");

//const returnOpposite = logic => logic === true ? false : true;
const returnOpposite = logic => !logic;
console.log(returnOpposite(true));
console.log(returnOpposite(false));