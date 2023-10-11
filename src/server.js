require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

require("./db/connection");
const Book = require("./books/model");

const app = express();
app.use(express.json());

// get request
app.get("/books", async (request, response) => {
  const allBooks = await Book.find();
  const successResponse = {
    message: "allbooks",
    allBooks: allBooks,
  };
  response.send(successResponse);
});

// post a new book to db
app.post("/books", async (request, response) => {
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
app.put("/books", async (request, response) => {
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
app.delete("/books", async (request, response) => {
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
app.patch("/books", async (request, response) => {
  const deleteAllBooks = await Book.deleteMany({});
  const successResponse = {
    message: "deleted everything",
    deleteAllBooks: deleteAllBooks,
  };
  response.send(successResponse);
});

// find single book by title
app.get("/books/:title/", async (request, response) => {
  const findByTitle = await Book.findOne({
    title: request.params.title,
  });
  response.send(findByTitle);
});

// search on a book title route and update any field
app.put("/books/:title/", async (request, response) => {
  const query = { title: request.params.title };
  const updateByTitle = await Book.findOneAndUpdate(query, {
    title: request.body.title,
    author: request.body.author,
    genre: request.body.genre,
  });
  response.send(updateByTitle);
});

app.listen(5001, () => {
  console.log("Server is listening");
});
