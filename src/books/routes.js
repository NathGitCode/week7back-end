const { Router } = require("express");
const bookRouter = Router();

const Book = require("./model");

const {
  findAllBooks,
  addBook,
  updateBook,
  deleteBook,
  deleteAllBooks,
  findBookByTitle,
  updateAnyField,
} = require("./controllers");

// get request
bookRouter.get("/books", findAllBooks);

// post a new book to db
bookRouter.post("/books", addBook);

// updates a single books author
bookRouter.put("/books", updateBook);

// deletes a single book
bookRouter.delete("/books", deleteBook);

// delete all books
bookRouter.delete("/books/delete", deleteAllBooks);

// find single book by title
bookRouter.get("/books/:title/", findBookByTitle);

// search on a book title route and update any field
bookRouter.put("/books/:title/", updateAnyField);

module.exports = bookRouter;
