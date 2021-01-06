const express = require("express");
const users = require("./users.json");
const books = require("./books.json");

const app = express();

const DEFAULT_LISTEN_PORT = 3000;

app.use(express.json());

app.get("/api/books", (req, res) => {
    var catalog = [];

    for (var book of books) {
        catalog.push({
            "title": book.title,
            "author": book.author,
            "isbnNumber": book.isbnNumber,
            "isCheckedOut": book.isCheckedOut
        });
    }

    res.json(catalog);
});

app.get("/api/books/:bookID", (req, res) => {
    var { title, author, isbnNumber, isCheckedOut, dateDue, checkedOutBy } = books[Number(req.params.bookID)];
    res.json({
        "title": title,
        "author": author,
        "isbnNumber": isbnNumber,
        "isCheckedOut": isCheckedOut,
        "dateDue": dateDue,
        "checkedOutBy": checkedOutBy
    });
});

app.get("/api/books/:bookID/checkout/:userID", (req, res) => {
    var book = books[req.params.bookID];

    if (book.isCheckedOut) {
        if (Number(req.params.userID) === book.checkedOutBy) {
            res.json({ "message": "You have already checked out this book" });
            return;
        }
        else {
            res.json({ "message": "Someone else has already checked out this book" });
            return;
        }
    }

    books[req.params.bookID].isCheckedOut = true;
    books[req.params.bookID].checkedOutBy = Number(req.params.userID);
    res.json({ "success": true });
});

app.get("/api/books/:bookID/return", (req, res) => {
  books[req.params.bookID].isCheckedOut = false;
  res.json({ "success": true});
});


app.listen(DEFAULT_LISTEN_PORT, () => {
    console.log(`Server listening on port ${DEFAULT_LISTEN_PORT}!`)
});

module.exports = app;
