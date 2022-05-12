// Hacer una petición a la API http://jsonplaceholder.typicode.com/comments
// Con el array que nos llegue, iremos rellenando nuestra ul con <li> con los
// primeros 20 elementos.

const listComments = document.getElementById("listComments");
const url = "http://jsonplaceholder.typicode.com/comments";

function fillList(array) {
    array.slice(0,20).forEach(comment => {
        listComments.innerHTML += `<li>${comment.name}</li>`;
    });
}

fetch(url)
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        throw Error("Hay algún problema con la respuesta: " + response.statusText);
    })
    .then(data => {
        fillList(data);
    })
    .catch(error => {
        console.log(error);
    });
