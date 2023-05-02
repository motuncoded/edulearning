import React, { useState,useEffect } from 'react'
import courseData from "../data/db.json"
const Card = ({search}) => {
  


  return (
  <>
 {courseData .filter((list) => {
                return search.toLowerCase() === ''
                  ? list
                  : list.name.toLowerCase().includes(search) || list.tag.toLowerCase().includes(search) ;
              }).map((list)=>(
    <div key={list.id} className='card bg-secondary-100  text-neutral-400'>
      <img src={require("../assests/" + list.icon)} width="200px" alt="img-fluid"/>     
<p className='cardTitle'>{list.name}</p>
<div className='flex'>
<button className='secondary-button cardButton'><a href={list.web} target='_new'>Start now</a></button>
    </div></div>
))}
    </>
  )
}

export default Card