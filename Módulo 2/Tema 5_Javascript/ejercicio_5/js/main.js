//Book constructor
class Book {
    constructor(id, title, author, sales, price) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.sales = sales;
        this.price = price;
    }
}

//Data initialization
let books = [
    new Book(1, 'The selfis Gene', 'Richard Dawkings', 740120, 12),
    new Book(2, 'The God Delusion', 'Richard Dawkings', 610120, 15),
    new Book(3, 'La nueva mente del emperador', 'Rorger Penrose', 120000, 17),
    new Book(4, 'Sapiens: A Brief History of Humankind', 'Yuval Noah Harari', 910120, 12),
    new Book(5, 'The selfis Gene', 'Richard Dawkings', 740120, 21),
    new Book(6, 'The God Delusion', 'Richard Dawkings', 610120, 15),
    new Book(7, 'La nueva mente del emperador', 'Rorger Penrose', 120000, 17),
    new Book(8, 'Sapiens: A Brief History of Humankind', 'Yuval Noah Harari', 910120, 21),
    new Book(9, 'The selfis Gene', 'Richard Dawkings', 740120, 12),
    new Book(10, 'The God Delusion', 'Richard Dawkings', 610120, 15),
];

let displayedBooks = [...books];
//let displayedBooks = Array.from(books);

//Selectores
const booksTbody = document.getElementById("booksTbody");
const titleInput = document.getElementById("titleInput");
const authorInput = document.getElementById("authorInput");
const salesInput = document.getElementById("salesInput");
const priceInput = document.getElementById("priceInput");
const addBookButton = document.getElementById("addBookButton");
const tfoot = document.querySelector("tfoot");

function updateTable() {
    //Vacioamos el tbody por completo
    booksTbody.innerHTML = '';

    //Generamos de nuevo todas las filas
    displayedBooks.forEach(book => {
        booksTbody.innerHTML += `
        <tr>
            <td>${book.id}</td>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.sales}</td>
            <td>${book.price}</td>
            <td>
                <button class='btn btn-danger' id='${book.id}'>Remove</button>
            </td>
        </tr>`;

    });

    const totalPrice = displayedBooks.reduce((priceSum, book) => priceSum + book.price, 0); 
    tfoot.textContent = `Precio total ${totalPrice}`;
}

booksTbody.onclick = e => {
    if (e.target.tagName === "BUTTON") {
        books = books.filter(book => book.id != e.target.id);
        displayedBooks = displayedBooks.filter(book => book.id != e.target.id);
        updateTable();
    }
}

updateTable();

// Process form and add a new book
addBookButton.addEventListener("click", e => {
    e.preventDefault();

    const newId = books[books.length-1].id +1;
    const newBook = new Book(newId, titleInput.value, authorInput.value, salesInput.value, Number(priceInput.value));

    books.push(newBook);
    displayedBooks.push(newBook);
    
    

    addBookButton.parentNode.reset();
    updateTable();
});

// Ejercicio 5
const filterInput = document.querySelector("#filterInput");
const priceHeader = document.querySelector("#priceHeader");

let ascendingOrder = true;

filterInput.addEventListener("input", e => {
    // Version 1, case sensitive
    //displayedBooks = books.filter(book => book.title.includes(e.target.value));
    //updateTable();

    // Para tener en cuenta otro campo, incluimos en la función lo siguiente
    // || book.author.includes(e.target.value)

    // Version 2, case insensitive
    displayedBooks = books.filter(book => {
        //return book.title.toUpperCase().includes(e.target.value.toUpperCase());
        const upperTitle = book.title.toUpperCase();
        const upperInputValue = e.target.value.toUpperCase();
        return upperTitle.includes(upperInputValue);
    });
    updateTable();
});

// Apartado 2
priceHeader.style.cursor = "pointer";
priceHeader.addEventListener("click", e => {
    ascendingOrder = !ascendingOrder;
    document.querySelector("span").innerHTML = ascendingOrder ? "&uarr;" : "&darr;"
    displayedBooks.sort((book1, book2) => {
        return ascendingOrder ? book1.price - book2.price : book2.price - book1.price;
    });
    updateTable();
});

// Apartado 3
