require("dotenv").config();
const express = require("express");

require("./db/connection");
const bookRouter = require("./books/routes");
const authorRouter = require("./authors/routes");

const app = express();
app.use(express.json());

app.use(bookRouter);
app.use(authorRouter);

app.listen(5001, () => {
  console.log("Server is listening");
});
