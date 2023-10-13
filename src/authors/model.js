const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
  authorName: {
    type: String,
    required: true,
    unique: true,
  },
});

const Author = mongoose.model("author", authorSchema);

module.exports = Author;
