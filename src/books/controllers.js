const Book = require("./model");

const findAllBooks = async (request, response) => {
  const allBooks = await Book.find();
  const successResponse = {
    message: "allbooks",
    allBooks: allBooks,
  };
  response.send(successResponse);
};

const addBook = async (request, response) => {
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
};

const updateBook = async (request, response) => {
  const query = { title: request.body.title };
  const updateAuthor = await Book.findOneAndUpdate(query, {
    author: request.body.author,
  });

  const successResponse = {
    message: "updated",
    updateAuthor: updateAuthor,
  };
  response.send(successResponse);
};

const deleteBook = async (request, response) => {
  const deleteBook = await Book.deleteOne({
    title: request.body.title,
  });
  const successResponse = {
    message: "deleted",
    deleteBook: deleteBook,
  };
  response.send(successResponse);
};

const deleteAllBooks = async (request, response) => {
  const deleteAllBooks = await Book.deleteMany({});
  const successResponse = {
    message: "deleted everything",
    deleteAllBooks: deleteAllBooks,
  };
  response.send(successResponse);
};

const findBookByTitle = async (request, response) => {
  const findByTitle = await Book.findOne({
    title: request.params.title,
  });
  response.send(findByTitle);
};

const updateAnyField = async (request, response) => {
  const query = { title: request.params.title };
  const updateByTitle = await Book.findOneAndUpdate(query, {
    title: request.body.title,
    author: request.body.author,
    genre: request.body.genre,
  });
  response.send(updateByTitle);
};

module.exports = {
  findAllBooks: findAllBooks,
  addBook: addBook,
  updateBook: updateBook,
  deleteBook: deleteBook,
  deleteAllBooks: deleteAllBooks,
  findBookByTitle: findBookByTitle,
  updateAnyField: updateAnyField,
};
