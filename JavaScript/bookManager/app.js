let books = [
  { title: "Rich Dad Poor Dad", author: "Robert T.Kiyosaki", price: 1500, available: true },
  { title: "Harry Potter", author: "J. K. Rowling", price: 1650, available: false },
  { title: "The Witcher", author: "Andrzej Sapkowski", price: 2400, available: true },
  { title: "One Piece", author: "Eiichiro Oda", price: 1800, available: true }
];

let output = document.getElementById("output");

function showAllBooks() {
  output.innerHTML = "";

  books.forEach(book => {
    let li = document.createElement("li");
    li.innerText = `${book.title} | ${book.author} | Rs.${book.price}`;
    output.appendChild(li);
  });
}

function showAvailableBooks() {
  output.innerHTML = "";

  let availableBooks = books.filter(book => book.available);

  availableBooks.forEach(book => {
    let li = document.createElement("li");
    li.innerText = `${book.title} | ${book.author} | Rs.${book.price}`;
    output.appendChild(li);
  });
}

function increasePrice() {
  output.innerHTML = "";

  let updatedPrices = books.map(book => {
    return {
      title: book.title,
      author: book.author,
      price: book.price + book.price * 0.10
    };
  });

  updatedPrices.forEach(book => {
    let li = document.createElement("li");
    li.innerText = `${book.title} | ${book.author} | Rs.${book.price}`;
    output.appendChild(li);
  });
}

function findBook() {
  output.innerHTML = "";
  let search = document.getElementById("searchTitle").value;

  let book = books.find(
    b => b.title.toLowerCase() === search.toLowerCase()
  );

  let li = document.createElement("li");

  if (book) {
    li.innerText = `${book.title} | ${book.author} | Rs.${book.price}`;
  } else {
    li.innerText = "Book not found";
  }

  output.appendChild(li);
}
