const Author = require("./model");
const Book = require("../books/model");

const addAuthorOb = async (req, res) => {
  const addAuthor = await Author.create({
    authorName: req.body.authorName,
  });
  res.send(addAuthor);
};

const booksByAuthor = async (req, res) => {
  let getBooksByAuthor = await Author.find({
    authorName: req.params.authorName,
  });
  let booksByAuthor = await Book.find({
    author: req.params.authorName,
  });
  let twoResponse = (getBooksByAuthor += booksByAuthor);
  res.send(twoResponse);
};

const deleteAllAuthors = async (req, res) => {
  const deleteAuthors = await Author.deleteMany({});
  res.send(deleteAuthors);
};

module.exports = {
  addAuthorOb: addAuthorOb,
  booksByAuthor: booksByAuthor,
  deleteAllAuthors: deleteAllAuthors,
};
