import React, { useState,useEffect } from 'react'

const Card = () => {


  const [courseData, SetCourseData] = useState([])
  const [color, setColor] = useState('#27856a')


useEffect(()=>{
  fetch("http://localhost:3000/courses")
  .then(response => response.json())
  .then(data => SetCourseData( data))
  .catch(err => console.log(err))
})

  return (
  <>
{courseData && courseData.map((list)=>(

    <div key={list.id} className='card bg-secondary-100  text-neutral-400'>
      <div>
        <img src={list.image}/>
      </div>
      <p className=' cardBio'> {list.tag}</p>
<p className='cardTitle'>{list.name}</p>
<div className='flex'>
<button className='secondary-button cardButton'><a href={list.web} target='_new'>Start now</a></button>
    </div></div>
))}
    </>
  )
}

export default Card