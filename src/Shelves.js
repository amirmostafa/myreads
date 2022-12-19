import { useState, useEffect } from "react";
import BookList from "./BookList";
import { getAll } from "./BooksAPI";
import { update } from "./BooksAPI";

const shelfs= [{ name: 'Want To Read', type: 'wantToRead' }, { name: 'Currently Reading', type: 'currentlyReading' }, { name: 'Read', type: 'read' }];
const Shelves = () => {
  
  const [books, setBooks] = useState([]);
  useEffect(() => {
    getAll().then((value) => {
      setBooks(value)
    })
  }, []);
  const updateShelf = (shelf, bookId) => {
    update({ id: bookId }, shelf).then(() => {
      setBooks(books.map((book) => {
        if (book.id === bookId)
          book.shelf = shelf
        return book;
      }))
    })

  }
  return (

    shelfs.map((shelf) =>
      <div key={shelf.name} className="bookshelf">
        <h2 className="bookshelf-title">{shelf.name}</h2>
        <div className="bookshelf-books">
          <BookList

            books={books.filter((book) => book.shelf === shelf.type)}
            updateShelf={updateShelf}
          />
        </div>
      </div>
    )

  )




};

export default Shelves;