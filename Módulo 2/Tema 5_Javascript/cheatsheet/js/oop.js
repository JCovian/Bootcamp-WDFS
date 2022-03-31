console.log("------------- ES 5 ----------------");
// Objetos y prototipos
// 1 Objetos y prototipos
// 1.1 Creación de objetos y asignación de propidades
let myCar = {};
console.log(typeof myCar, myCar);

myCar = new Object();
console.log(typeof myCar, myCar);

myCar.brand = "Ford";
myCar.model = "Mustang";
console.log(typeof myCar, myCar);

myCar["brand"] = "Ford";
myCar["model"] = "Mustang";
console.log(typeof myCar, myCar);

myCar = {
    brand: "Ford",
    model: "Mustang",
}
console.log(typeof myCar,myCar);

// Enumeración de propiedades y valores
for (const property in myCar) {
    console.log("Using For..in: ", property);
}

const keys = Object.keys(myCar);
console.log(typeof keys, keys);
keys.forEach(key => console.log("Using object.keys: ",key));

const values = Object.values(myCar);
console.log(typeof values, values);
values.forEach(value => console.log("Using object.values: ",value));

const entries = Object.entries(myCar);
console.log(typeof entries, entries);
entries.forEach((key, value) => console.log("Using object.entries: ",key, value));

// 1.3 Funciones constructoras
function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;

    this.getAge = function () {
        let age = new Date().getFullYear() - this.year;
        console.log(`This ${this.brand} ${this.model} is ${age} years old`);
    }
}

myCar = new Car("Ford", "Mustang", 2015);
console.log(typeof myCar,myCar);
myCar.getAge();

// 1.4 Métodos de objetos vs métodos del protipo 
Car.getAge = function () { // No modifica las instancias
    console.log("Otro calculo de edad.");
}
myCar.getAge();

Car.prototype.getHP = function () {
    console.log("This car has 300 horsepower.");
}

Car.prototype.getHP = function () {
    console.log("This car has 400 horsepower.");
}

myCar.getHP();

// 1.5 Herencia
function SUV(brand,model,year,height,width) {
    Car.call(this,brand,model,year);
    this.height = height;
    this.width = width;
}

SUV.prototype = Object(Car.prototype);
SUV.prototype.constructor = SUV;
let mySUV = new SUV("Audi","Q7",2019,1.7,2);
console.log(mySUV);
mySUV.getHP;

console.log("------------- ES 6 -----------------");
// Clases (Syntactic sugar)
class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.basePrice = 150;
    }

    getSummary() {
        console.log(`${this.title} was written by ${this.author} in ${this.year}`);
    }

    get cover() {
        return `${this.title} of ${this.author}`;
    }

    //set cover(value) {
    //    console.log(`Estás intentando cambiar la portada a ${value}, pero no es posible.`);
    //}
    set cover(value) {
        this.title = value.split(" of ")[0];
        this.author = value.split(" of ")[1];
    }

    get price() {
        return this.basePrice * 1.21;
    }

    set price(value) {
        this.basePrice = value / 1.21;
    }
}

const book1 = new Book("Metamorphosis", "Fran Kafka", 1912);
console.log(book1);
book1.getSummary();

const cover = book1.cover;
console.log(cover);

//book1.cover = "Nueva portada";
book1.cover = "El castillo of Franz Kafka";
console.log(book1.cover);

// Get
const finalPrice = book1.price;
console.log(finalPrice);

// Set
book1.price = 121;
console.log(book1);

// Herencia
class Magazine extends Book {
    constructor(title, author, year, month) {
        super(title,author,year);
        this.month = month;
    }
    
    getType () {
        console.log("Magazine");
    }
}

const mag1 = new Magazine("Autopista", "Motor Press Ibérica", 2017, "July");
console.log(mag1);
mag1.getSummary();