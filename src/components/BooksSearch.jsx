import React, {useState} from 'react'
import {BsArrowBarDown, BsSearch} from "react-icons/bs"
import BooksData from "../data/BooksData.js"

export const BooksSearch = () => {
  const [search, setSearch] = useState('');
  const handleSearch = (e) =>{
  
    setSearch(e.target.value.toLowerCase())
   
  }
  const filteredItems = BooksData.filter((list) => {
    return search === null ? list
      :list.name.toLowerCase().includes(search)  || list.tag.toLocaleLowerCase().includes(search);
    
    })
 const itemsDisplay =search ? filteredItems : BooksData

  return (
    <section>
    <div className='container'>
      <div className='flex'>
      <form className='search-container'   >
        <div className='search'>
      <BsSearch size={20} className="search-icon"/>
        <input  type="search" value={search} onChange={handleSearch} name="" id=""className='search-input' />
        </div>
        <button type='submit' className="search-button" onClick={handleSearch}>Search</button>
      </form>
      </div>
 <div className='booksContainer padding-block-700'>
 <>
 
 {itemsDisplay.map((list)=>(
    <div key={list.id} className='books-card text-neutral-400'>
      <div className='flex'>
      <img src={list.icon}  width="200px" alt="img-fluid"/>   </div>
<div className='flex'>
<p className='  '>{list.name}</p>
<p className=' '>{list.author}</p>
<button type='submit' className='secondary-button  '>
  <a href={list.web} target="_blank"><BsArrowBarDown/></a>
  </button>
    </div>
    </div>
))}
    </>      </div>    </div>
    </section>
  )
}
