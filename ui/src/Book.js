import React from 'react';

const Book = ({books}) => {
        if(books.length !== 0) {
            return <h1>{books[0].title}</h1>
        }
        else {
            return <h1>Loading..</h1>
        }

}

export default Book;
