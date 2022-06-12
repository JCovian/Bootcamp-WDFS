const url = "http://jsonplaceholder.typicode.com/users";

//let promise = fetch(url);
//promise.then(response => console.log(response))

//fetch(url).then(response => console.log(response));
/*
let array = [];

fetch(url)
    .then(response => response.json())
    .then(data => console.log(data));*/

const printNames = array => array.forEach(user => console.log("Nombre: ", user.name));
const printCities = array => array.forEach(user => console.log("Ciudad: ", user.address.city));
const printLats = array => array.forEach(user => console.log("Latitud: ", user.address.geo.lat));

fetch(url).then(r => r.json()).then(data => console.log(data));

fetch(url)
    .then(response => {
        console.log(response);
        if (response.ok) {
            return response.json();
        }
        throw Error("Hay algún problema con la respuesta " + response.statusText);
    })
    .then(data => {
        printNames(data);
        printCities(data);
        printLats(data);
    })
    .catch(error => {
        console.log(error);
    });

// Async / await - Alternativa a then
async function requestURL(url) {
    console.log(2);
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    console.log(4);
}
console.log(1);
requestURL(url);
console.log(3);

// Petición con método HTTP POST en lugar de GET
const POST_URL = "http://jsonplaceholder.typicode.com/posts";

const newPost = {
    title: "mi título",
    body: "mi cuerpo de comunicación"
}

const http = {
    method: "POST",
    headers: {
        "content-type": "application/json"
    },
    body: JSON.stringify(newPost)
};

fetch(POST_URL, http)
    .then(response => response.json())
    .then(data => console.log(data));