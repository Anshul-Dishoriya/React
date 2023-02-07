import { useState } from "react";
import BookEdit from './BookEdit';


function BookShow({book , onDelete , onEdit}){
  const [showEdit , setShowEdit] = useState(false);


  const handleEdit = () =>{
    setShowEdit(!showEdit)
  };
  
  //event handler
  const handleSubmit = (id , newTitle) => { 
    setShowEdit(false);
    onEdit(id, newTitle);
  };

  let content = <h3>{book.title}</h3>
  if (showEdit){
    content = <BookEdit book = {book} onSubmit = {handleEdit} />;
  }

  return (
    <div className="book-show">
      <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="books" />
      <div>{content}</div>
      <div className="actions">
      
        <button className="edit" onClick={handleEdit}>
          edit
        </button>
        
        <button className="delete" onClick={() => onDelete(book.id)}>
          Delete
        </button>
      
      </div>
    </div>
  );
  }

export default BookShow;