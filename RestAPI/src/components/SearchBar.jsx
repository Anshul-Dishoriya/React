import { useState } from "react";
import './SearchBar.css';


function SearchBar({onSubmit}) {
  const [term , setTerm] = useState('');

  const handleFromSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };

  //event handler to handle input event
  const handleChange = (event) => {
    setTerm(event.target.value);
  };
    
  return (
    <div className="search-bar">
      <form onSubmit = {handleFromSubmit} >
        <label>Enter Search Term </label>
        <input value={term} onChange={handleChange}  />  
      </form>
    </div>
  );
  } 
  
export default SearchBar;
  
















