import { useState } from "react";

function BookEdit({book , onSubmit}){
  const [title , setTitle] = useState(book.title);
   
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(book.id , title);
  }

  return (
    <form onSubmit={handleSubmit} className="book-edit">
      <label>Title</label>
      <input className="input" value = {title} onChange={(event) => setTitle(event.target.value)} />
  
      <button onSubmit={handleSubmit} className="button is-primary">
        Save
      </button>
  
    </form>
  );
}

export default BookEdit;