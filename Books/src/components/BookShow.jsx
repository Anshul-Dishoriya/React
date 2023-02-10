import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";
import BookEdit from './BookEdit';


function BookShow( { book } ){
  const [showEdit , setShowEdit] = useState(false);
  const  {deleteBookById} = useBooksContext();

  const handleEditToggle = () =>{
    setShowEdit(!showEdit)
  };

  const handleDeleteBook = () => {
    deleteBookById(book.id);
  };

  let content = <h3>{book.title}</h3>
  if (showEdit){
    content = <BookEdit book = {book} onSubmit = {handleEditToggle} />;
  }

  return (
    <div className="book-show">
      <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="books" />
      <div>{content}</div>
      <div className="actions">
      
        <button className="edit" onClick={handleEditToggle}>
          edit
        </button>
        
        <button className="delete" onClick={handleDeleteBook}>
          Delete
        </button>
      
      </div>
    </div>
  );
  }

export default BookShow;