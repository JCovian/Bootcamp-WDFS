// Constructor
function User(name, firstLastName, secondLastName, email, age, city) {
    this.name = name;
    this.firstLastName = firstLastName;
    this.secondLastName = secondLastName;
    this.email = email;
    this.age = age;
    this.city = city;
    this.productsCount = 0;
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

// Rellenar la lista con datos de un usuario
/*for (const propertyName in users[0]) {
    const value = users[0][propertyName];
    if (typeof value !== "function") {
        //console.log(`propertyName: ${propertyName}, value: ${value}`);
        const newListItem = document.createElement("li");
        newListItem.innerHTML = `<b>${propertyName}:</b> ${value}`;
        newListItem.classList.add("list-group-item");
        list.appendChild(newListItem);
        // Otra forma:
        // list.innerHTML += '<li class="list-group-item"><b>${propertyName}:</b>${value}</li>'
    }
}*/

function fillList(user) {
    list.innerHTML = "";

    for (const propertyName in user) {
        const value = user[propertyName];

        if (typeof value !== "function") {
            list.innerHTML += `<li class="list-group-item"><b>${propertyName}:</b>${value}</li>`;
        }
    }
}

// Estado inicial
fillList(users[0]);

function processProducts(e) {
    const selectedUser = users.find(user => user.name === select.value);
    /*if (e.target === incrementButton) {
        selectedUser.incrementProducts();
    } else {
        selectedUser.emptyProducts();
    }*/

    e.target === incrementButton ? selectedUser.incrementProducts() : selectedUser.emptyProducts();
    fillList(selectedUser);
}

// Añadir listeners
select.addEventListener("change", e => {
    const selectedUser = users.find(user => user.name === select.value);
    fillList(selectedUser);
});

incrementButton.addEventListener("click", processProducts);
emptyButton.addEventListener("click", processProducts);
