import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Courses from './Courses'

const Resources = () => {
  
  

  return (
    <div className='padding-block-700'>
        <div className="resources container">
        <Courses/>
         </div>
      </div>
  )
}

export default Resources