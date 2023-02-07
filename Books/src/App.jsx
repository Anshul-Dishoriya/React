import { useState } from "react";
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import './index.css'

function App() {
  const [books , setBooks] = useState([]);

  // event handler for editing book
  const editBooksById = (id, title) => {
    const updatedBooks = books.map((book) => {
      if (id == book.id){
        return {...book , title};
      }
      return book;
    });
    setBooks(updatedBooks);
  }

  // event handler for deleting book
  const deleteBookById = (id) => {
    const updatedBooks = books.filter( (book) =>{
      return book.id != id;
    } )
    setBooks(updatedBooks);
  }
  
  // event handler for creating book
  const createBook = (title) => {
    const updatedBooks = [ ...books , {id : Math.round(Math.random() * 99999) , title:title} ];
    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList onEdit={editBooksById} onDelete = {deleteBookById} books={books} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App