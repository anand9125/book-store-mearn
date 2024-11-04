
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://akdon9936:nMxORrZotFbUjbwZ@cluster0.xm9z9.mongodb.net/book-store").then(() => {
    console.log("MongoDB connected successfully");
  })
const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description:  {
        type: String,
        required: true,
    },
    category:  {
        type: String,
        required: true,
    },
    trending: {
        type: Boolean,
        required: true,
    },
    coverImage: {
        type: String,
        required: true,
    },
    oldPrice: {
        type: Number,
        required: true,
    },
    newPrice: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
  }, {
    timestamps: true,
  });

  const Book = mongoose.model('Book', bookSchema); //document represents a single record in a MongoDB collection. 

  module.exports = Book;