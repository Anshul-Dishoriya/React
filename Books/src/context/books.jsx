import {createContext , useState} from 'react'
import axios from "axios";

const BookContext = createContext();

function Provider({children}) {
  const [books , setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get('http://localhost:3001/books/');
    setBooks(response.data);
  };

  // event handler for editing book
  const editBookById = async (id, title) => {
    const response = await axios.put(`http://localhost:3001/books/${id}` ,{ 
      title : title,
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

  const valueToShare = {
    books ,
    deleteBookById,
    editBookById ,
    createBook ,
    fetchBooks ,

  };

  return <BookContext.Provider value = {valueToShare}>
    {children}
  </BookContext.Provider>;
}

export { Provider };
export default BookContext;