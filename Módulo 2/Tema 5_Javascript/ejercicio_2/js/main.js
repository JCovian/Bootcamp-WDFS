// Constructor
function User(name, firstLastName, secondLastName, email, age, city, productsCount) {
    this.name = name;
    this.firstLastName = firstLastName;
    this.secondLastName = secondLastName;
    this.email = email;
    this.age = age;
    this.city = city;
    this.productsCount = productsCount;
    this.incrementProducts = function () {
        this.productsCount++;
    };
    this.emptyProducts = function () {
        this.productsCount--;
    };
}

// Data
const users = [
    new User("Fran", "Gomez", "Fernández", "fgomez@gmail.com", 35, "Málaga"),
    new User("Lucía", "García", "Ruíz", "lgarcia@gmail.com", 41, "Madrid"),
    new User("María", "Nuñez", "Coronado", "mnunez@gmail.com", 18, "Albacete"),
];

// Selectors
const select = document.querySelector("#userSelect");
const list = document.querySelector("#userInfo");
const incrementButton = document.querySelector("#incrementButton");
const emptyButton = document.querySelector("#emptyButton");

users.forEach(user => {
    const newOption = document.createElement("option");
    newOption.textContent = user.name;
    select.appendChild(newOption);
});