const { Router } = require("express");
const bookRouter = Router();

const Book = require("./model");

// get request
bookRouter.get("/books", async (request, response) => {
  const allBooks = await Book.find();
  const successResponse = {
    message: "allbooks",
    allBooks: allBooks,
  };
  response.send(successResponse);
});

// post a new book to db
bookRouter.post("/books", async (request, response) => {
  const newBook = await Book.create({
    title: request.body.title,
    author: request.body.author,
    genre: request.body.genre,
  });
  console.log(newBook);

  const successResponse = {
    message: "success",
    newBook: newBook,
  };

  response.send(successResponse);
});

// updates a single books author
bookRouter.put("/books", async (request, response) => {
  const query = { title: request.body.title };
  const updateAuthor = await Book.findOneAndUpdate(query, {
    author: request.body.author,
  });

  const successResponse = {
    message: "updated",
    updateAuthor: updateAuthor,
  };
  response.send(successResponse);
});

// deletes a single book
bookRouter.delete("/books", async (request, response) => {
  const deleteBook = await Book.deleteOne({
    title: request.body.title,
  });
  const successResponse = {
    message: "deleted",
    deleteBook: deleteBook,
  };
  response.send(successResponse);
});

// delete all books
bookRouter.patch("/books", async (request, response) => {
  const deleteAllBooks = await Book.deleteMany({});
  const successResponse = {
    message: "deleted everything",
    deleteAllBooks: deleteAllBooks,
  };
  response.send(successResponse);
});

// find single book by title
bookRouter.get("/books/:title/", async (request, response) => {
  const findByTitle = await Book.findOne({
    title: request.params.title,
  });
  response.send(findByTitle);
});

// search on a book title route and update any field
bookRouter.put("/books/:title/", async (request, response) => {
  const query = { title: request.params.title };
  const updateByTitle = await Book.findOneAndUpdate(query, {
    title: request.body.title,
    author: request.body.author,
    genre: request.body.genre,
  });
  response.send(updateByTitle);
});

module.exports = bookRouter;
