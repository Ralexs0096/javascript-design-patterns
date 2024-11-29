/**
 * In our application, we want users to be able to add books.
 * All books have a `title`, an `author`, and an `isbn` number.
 * However, a library usually doesn't have just one copy of a book,
 * it usually has multiple copies of the same one.
 */

/**
 * We want to create multiple instance of the `Book` constructor,
 * that represent a single book.
 */

class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// let create the functionality to add new books to the list

const books = new Map();

const createBook = (title, author, isbn) => {
    const existingBook = books.has(isbn);

    if(existingBook){
        return books.get(isbn)
    }

    /**
     * If it doesn’t contain the book’s ISBN number yet,
     * we’ll create a new book and add its ISBN number to the isbnNumbers set.
     */
    const book = new Book(title, author, isbn);
    books.set(isbn, book);
    return  book;
}