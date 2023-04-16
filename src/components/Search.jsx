import React from 'react'
 import {BsSearch} from "react-icons/bs";
const Search = () => {
  return (
    <section>
    <div className='container'>
      <div className='flex'>
      <form className='search-container' >
        <div className='search'>
      <BsSearch size={18} className="search-icon"/>
        <input type="text" name="" id=""className='search-input' />
        </div>
        <button className="search-button">Search</button>
      </form>
      </div>
    </div>
    </section>
  )
}

export default Search