let books = [];
let borrowers = [];

class Book {
  constructor(id, title, author, available = true) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.available = available;
  }
}

class Borrower {
  constructor(bookId, borrowerName, borrowDate, returnDate) {
    this.bookId = bookId;
    this.borrowerName = borrowerName;
    this.borrowDate = borrowDate;
    this.returnDate = returnDate;
  }
}

function addBook(id, title, author) {
  let newBook = new Book(id, title, author);
  books.push(newBook);
  displayBooks(); // อัปเดตรายการหนังสือ
}

function borrowBook(bookId, borrowerName, borrowDate, returnDate) {
  let book = books.find(book => book.id === bookId);
  if (book && book.available) {
    book.available = false;
    let newBorrower = new Borrower(bookId, borrowerName, borrowDate, returnDate);
    borrowers.push(newBorrower);
    displayBooks(); // อัปเดตรายการหนังสือ
  } else {
    alert("ไม่สามารถยืมหนังสือได้");
  }
}

function returnBook(bookId) {
  let book = books.find(book => book.id === bookId);
  if (book && !book.available) {
    book.available = true;
    let borrowerIndex = borrowers.findIndex(borrower => borrower.bookId === bookId);
    if (borrowerIndex !== -1) {
      borrowers.splice(borrowerIndex, 1); // ลบข้อมูลผู้ยืม
    }
    displayBooks(); // อัปเดตรายการหนังสือ
    alert("คืนหนังสือสำเร็จ");
  } else {
    alert("ไม่สามารถคืนหนังสือได้");
  }
}

function searchBooks(keyword) {
  let results = books.filter(book =>
    book.title.toLowerCase().includes(keyword.toLowerCase()) ||
    book.author.toLowerCase().includes(keyword.toLowerCase())
  );
  let resultsDiv = document.getElementById("search-results");
  resultsDiv.innerHTML = ""; // เคลียร์ผลลัพธ์เก่า

  if (results.length > 0) {
    results.forEach(book => {
      let bookInfo = document.createElement("p");
      bookInfo.textContent = book.title + " by " + book.author;
      resultsDiv.appendChild(bookInfo);
    });
  } else {
    resultsDiv.textContent = "ไม่พบหนังสือที่ค้นหา";
  }
}

function displayBooks() {
    const bookList = document.getElementById("book-list-ul");
    bookList.innerHTML = ""; // Clear existing list

    books.forEach(book => {
        const bookItem = document.createElement("li");
        bookItem.textContent = `${book.title} by ${book.author} (ID: ${book.id}, Available: ${book.available ? 'Yes' : 'No'})`;
        bookList.appendChild(bookItem);
    });

}

// Event Listeners
document.getElementById("add-book-btn").addEventListener("click", () => {
  let id = parseInt(document.getElementById("book-id").value);
  let title = document.getElementById("book-title").value;
  let author = document.getElementById("book-author").value;
  addBook(id, title, author);
});

document.getElementById("borrow-book-btn").addEventListener("click", () => {
  let id = parseInt(document.getElementById("borrow-id").value);
  let name = document.getElementById("borrower-name").value;
  let borrowDate = document.getElementById("borrow-date").value;
  let returnDate = document.getElementById("return-date").value;
  borrowBook(id, name, borrowDate, returnDate);
});

document.getElementById("return-book-btn").addEventListener("click", () => {
  let id = parseInt(document.getElementById("return-id").value);
  returnBook(id);
});

document.getElementById("search-book-btn").addEventListener("click", () => {
  let keyword = document.getElementById("search-keyword").value;
  searchBooks(keyword);
});

displayBooks(); // แสดงรายชื่อหนังสือเมื่อโหลดหน้าเว็บ