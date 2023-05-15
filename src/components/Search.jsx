import React, { useState } from 'react'
 import {BsSearch} from "react-icons/bs"
 import Card from '../components/Card';

 import courseData from "../data/db.json"
 const Search = () => {
  const [search, setSearch] = useState('');
  const handleSearch = (e) =>{
  
    setSearch(e.target.value.toLowerCase())
   
  }
  const filteredItems = courseData.filter((list) => {
    return search === null ? list
      :list.name.toLowerCase().includes(search)  || list.tag.toLocaleLowerCase().includes(search);
    
    })
 const itemsDisplay =search ? filteredItems : courseData

  return (
    <section>
    <div className='container'>
      <div className='flex'>
      <form className='search-container'   >
        <div className='search'>
      <BsSearch size={18} className="search-icon"/>
        <input aria-label="Search courses" type="search" value={search} onChange={handleSearch} name="" id=""className='search-input' />
        </div>
        <button type='submit' className="search-button" onClick={handleSearch}>Search</button>
      </form>
      </div>
 <div className='course-container padding-block-700'>
 <>
 {search && filteredItems.length === 0 && (<div className='columns fs-tertiary-heading'>The course is not available</div>)}
 {itemsDisplay.map((list)=>(
    <div key={list.id} className='card bg-secondary-100  text-neutral-400'>
      <img src={list.icon} width="200px" alt="img-fluid"/>     
<p className='cardTitle'>{list.name}</p>
<div className='flex'>
<button type='submit' className='secondary-button cardButton'><a href={list.web} target='_new'>Start now</a></button>
    </div></div>
))}
    </>      </div>    </div>
    </section>
  )
}

export default Search