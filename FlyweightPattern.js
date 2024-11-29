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