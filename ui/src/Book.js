import React from 'react';
import './Book.css';

const Book = ({books,sort}) => {
        if(books.length !== 0) {
            books.sort((a,b) => (a[sort] > b[sort]) ? 1 : -1)
            const booklist = (
                <div className = 'bookContainer'>
                    {books.map( book => {
                        return (
                            <div className = 'book'
                             key={book.id}>
                             <h2>{book.title} </h2>
                             <h3>{book.author} </h3>
                             {book.isbnNumber}
                             </div>

                        )
                    })}
                </div>
            )
            return booklist
        }
        else {
            return <h1>Loading...</h1>
        }

}

export default Book;
