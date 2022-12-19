import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { search, update, getAll } from "./BooksAPI";
import BookList from "./BookList";


const SearchBooks= ()=> {
    const [books, setBooks] = useState([]);
    const [mainBooks, setMainBooks] = useState([]);
    useEffect(() => {
        getAll().then((value) => {
          setMainBooks(value)
        })
      }, []);
    const onQueryChange= (event)=> { event.target.value === "" ? setBooks([]) : 
    (
        search(event.target.value, 25).then((result)=> setBooks(result.error ? [] : result.map((book)=> {
            return {...book, shelf: mainBooks.find((mainbook)=> mainbook.id===book.id)?.shelf}
        })))
    )

    }
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
        <div className="search-books">
          <div className="search-books-bar">
            <Link
                className="close-search"
                to='/'
            >
              Close
            </Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
                onChange={onQueryChange}
              />
            </div>
          </div>
          <div className="search-books-results">
           <BookList
           books={books}
           updateShelf={updateShelf}
           />
          </div>
        </div>
    )
};

export default SearchBooks;