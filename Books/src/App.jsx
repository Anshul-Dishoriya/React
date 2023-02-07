import axios from "axios";
import { useEffect, useState } from "react";
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import './index.css'

function App() {
  const [books , setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get('http://localhost:3001/books/');
    setBooks(response.data);
  };

  useEffect(() => {
    fetchBooks();
  } , []);
 
  // event handler for editing book
  const editBooksById = async (id, title) => {
    const response = await axios.put(`http://localhost:3001/books/${id}` ,{ 
      title : title
    });

    const updatedBooks = books.map((book) => {
      if (id == book.id){
        return {...book , ...response.data};
      }
      return book;
    });
    setBooks(updatedBooks); 
  }

  // event handler for deleting book
  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`) ;

    const updatedBooks = books.filter( (book) =>{
      return book.id != id;
    } )
    setBooks(updatedBooks);
  }
  
  // event handler for creating book
  const createBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books/" , {
      title : title
    });

    const updatedBooks = [ ...books , response.data ];
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