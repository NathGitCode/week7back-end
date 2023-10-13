const { Router } = require("express");
const authorRooter = Router();

const {
  addAuthorOb,
  booksByAuthor,
  deleteAllAuthors,
} = require("./controllers");

authorRooter.post("/author/", addAuthorOb);

authorRooter.get("/books/author/:authorName", booksByAuthor);

authorRooter.delete("/author/delete", deleteAllAuthors);
module.exports = authorRooter;
