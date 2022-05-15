// Ejercicio 6.1 Posts - Paginación lado cliente

// Constantes
const POSTS_URL = "http://jsonplaceholder.typicode.com/posts";
const PAGE_SIZE = 20;

// Variables
let posts = [];
let currentPage = 1;

// Selectores 
const postsDiv = document.querySelector("#posts");
document.querySelectorAll(".previousPage").forEach(button => button.addEventListener("click", changePage));
document.querySelectorAll(".nextPage").forEach(button => button.addEventListener("click", changePage));

// Utilidades
function fillDiv() {
    const newPagePosts = paginate(posts, PAGE_SIZE, currentPage)
    postsDiv.innerHTML = "";
    newPagePosts.forEach(post => {
        postsDiv.innerHTML 
            += `<h3>${post.id}-${post.title}</h3>
                <p>${post.body}</p>`;
    });
}

function changePage(event) {
    if(event.target.className === "btn btn-primary previousPage" && currentPage > 1) {
        currentPage--;
    } else if (event.target.className === "btn btn-primary nextPage" && currentPage < posts.length / PAGE_SIZE){
        currentPage++;
    }
    fillDiv();
}

function paginate(array, page_size, page_number) {
    // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
    // https://stackoverflow.com/questions/42761068/paginate-javascript-array
    return array.slice((page_number - 1) * page_size, page_number * page_size);
  }

fetch(POSTS_URL)
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        throw Error("Hay algún problema con la respuesta: " + response.statusText);
    })
    .then(data => {
        posts = [...data];
        fillDiv();
    })
    .catch(error => {
        console.log(error);
    });

// 6.2 - Login y paginación desde el servidor.

// Constantes
const LOGIN_URL = "https://reqres.in/api/login";
const USERS_URL = "https://reqres.in/api/users";

// Selectres
const emailInput = document.querySelectorAll("input")[0];
const passwordInput = document.querySelectorAll("input")[1];
const usersList = document.querySelector("#usersList");
document.querySelector("#loginButton").addEventListener("click", login);

function login(event) {
    event.preventDefault();
    const userInfo = {
        email: emailInput.value,
        password: passwordInput.value
        };
        
    const config = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(userInfo)
        };

    fetch(LOGIN_URL, config)
        .then(response => response.json())
        //.then(data => data.error ? alert(data.error) : fetchAllUsers());
        .then(data => data.error ? alert(data.error) : fetchAllUsersV2(USERS_URL)); // Con la función asincrona
    }                                                                               // no le pasamos el USERS_URL

//async function fetchAllUsers() {
//    let response = await fetch(USERS_URL);
//    let data = await response.json();
//       
//    let users = [];
//    for (let page = 1; page <= data.total_pages; page++) {
//        response = await fetch(`${USERS_URL}?page=${page}`);
//        let newData = await response.json();
//        users = users.concat(newData.data); // users = [...users, ...newData];
//        }
//        
//    users.forEach(user => usersList.innerHTML += `<li class="list-group-item">${user.email}</li>`);
//    }

// Alternativa para recuperar todas las páginas de una API utilizando .then()
let users = [];

function fetchAllUsersV2(URL) { //Usamos then con una función recursiva. Es mejor el anterior.
    fetch(URL)
        .then(response => response.json())
        .then(newData => {
            users = users.concat(newData.data);
            if(newData.page < newData.total_pages) {
                fetchAllUsersV2(`${USERS_URL}?page=${newData.page+1}`);
            } else {
                usersList.innerHTML = "";
                users.forEach(user => usersList.innerHTML += `<li class="list-group-item">${user.email}</li>`);
            }
        });
}