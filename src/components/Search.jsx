import React, { useState } from 'react'
 import {BsSearch} from "react-icons/bs"
 import Card from '../components/Card';

 import courseData from "../data/db.json"
 const Search = () => {
  const [search, setSearch] = useState('');


  return (
    <section>
    <div className='container'>
      <div className='flex'>
      <form className='search-container'   >
        <div className='search'>
      <BsSearch size={18} className="search-icon"/>
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} name="" id=""className='search-input' />
        </div>
        <button  className="search-button" onClick={(e) => setSearch(e.target.value)}>Search</button>
      </form>
      </div>
 <div className='course-container padding-block-700'>
 <>
 {courseData.filter((list) => {
                return search === ''
                  ? list
                  : list.name.toLowerCase().includes(search.toLowerCase());
              }).map((list)=>(
    <div key={list.id} className='card bg-secondary-100  text-neutral-400'>
      <img src={require("../assests/" + list.icon)} width="200px" alt="img-fluid"/>     
<p className='cardTitle'>{list.name}</p>
<div className='flex'>
<button className='secondary-button cardButton'><a href={list.web} target='_new'>Start now</a></button>
    </div></div>
))}
    </>      </div>    </div>
    </section>
  )
}

export default Search