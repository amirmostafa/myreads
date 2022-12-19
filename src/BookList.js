import Book from "./Book";


const BookList = ({books, updateShelf}) => {
  

  return (
    
      <ol className="books-grid">
        {
          books.map((book) => (
            <li key={book.id}>
              <Book book={book}
              updateShelf={updateShelf}
              />
            </li>)
          )
        }
      </ol>
   
  )
};

export default BookList;