const Book = require("../models/book.model");

async function getbook(req, res) {
  try {
    const books = await Book.find();
    res.status(200).json(books); 
  } catch (err) {
    res.status(500).json({ message: "Something went wrong", error: err });
  }
}

module.exports = { getbook };