require("dotenv").config();
const express = require("express");

require("./db/connection");
const bookRouter = require("./books/routes");

const app = express();
app.use(express.json());

app.use(bookRouter);

app.listen(5001, () => {
  console.log("Server is listening");
});
