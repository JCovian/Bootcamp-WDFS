// Crear un array de 100 elementos en el que 
// cada elemento sea desde el 100 hasta el 0
// de forma decreciente
// Hacerlo con "push" y con acceso manual al array


let elementos = [];
for (i = 100; i > 0; i--) {
    elementos.push(i);
}
console.log(elementos);

let elementos2 = [];
for (i = 0; i < 100; i++) {
    elementos2[i] = 100-i;
}
console.log(elementos2);

// Copiar datos de un array a otro nuevo con forEach
let elementos3 = [];
function myfunction (value, index) {
    elementos3.push(value);
}
elementos2.forEach(myfunction);
console.log(elementos3);

// Lo mismo pero con función anónima
let elementos5 = [];
elementos2.forEach(function (elemento) {
    elementos5.push(elemento);
});
console.log(elementos5);

// Lo mismo con la flecha
let elementos4 = [];
elementos2.forEach(element =>  {
    elementos4.push(element);
});
console.log(elementos4);

