import React, { useState } from 'react'
 import {BsSearch} from "react-icons/bs"
 import data from "../data/db.json";
const Search = () => {
  const [search, setSearch] = useState("");
  const onChange = (e)=>{
    setSearch(e.target.value)
  }
  const onSearch = (searchItem)=>{
    setSearch(searchItem);
      }

  return (
    <section>
    <div className='container'>
      <div className='flex'>
      <form className='search-container' >
        <div className='search'>
      <BsSearch size={18} className="search-icon"/>
        <input type="text" value={search} onChange={onChange} name="" id=""className='search-input' />
        </div>
        <button onClick={()=> onSearch(search)} className="search-button">Search</button>
      </form>
      </div>
    </div>
    </section>
  )
}

export default Search