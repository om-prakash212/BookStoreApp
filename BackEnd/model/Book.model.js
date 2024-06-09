import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  price: Number,
  img: String,
});

const Book = mongoose.model('Book', bookSchema);

export default Book;
