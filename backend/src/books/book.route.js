const express = require('express');
const Book = require('./book.model');
const { postABook, getAllBooks, getSingleBook, UpdateBook, deleteABook } = require('./book.controller');
const verifyAdmin = require('../middleware/verifyAdmin');

const router =  express.Router();


router.post("/create-book",verifyAdmin, postABook)

// get all books
router.get("/", getAllBooks);

// single book endpoint
router.get("/:id", getSingleBook);

// update a book endpoint
router.put("/edit/:id",verifyAdmin, UpdateBook);

router.delete("/:id",verifyAdmin,  deleteABook)


module.exports = router;
