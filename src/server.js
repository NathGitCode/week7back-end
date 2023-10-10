require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

async function connection() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("successfully connected");
  } catch (error) {
    console.log(error);
  }
}

connection();

app.get("/books", (request, response) => {
  console.log(request.originalUrl);
  const book = {
    title: "lord of the rings",
    author: "tolkein",
    genre: "fantasy",
  };
  const successRespone = {
    message: "success",
    book: book,
  };
  response.send(successRespone);
});

app.post("/books", (request, response) => {
  console.log(request.body);
  const newBook = {
    title: request.body.title,
    author: request.body.author,
    genre: request.body.genre,
  };
  const successRespone = {
    message: "success",
    newBook: newBook,
  };

  response.send(successRespone);
});

app.listen(5001, () => {
  console.log("Server is listening");
});
