import React, { useEffect, useState } from 'react'
import c1 from "../assests/logo-2.png";
import Card from '../components/Card';
import Search from '../components/Search';


function Courses() {

  
  return (
    <section className='  padding-block-900'>
    <div className="container">
        <Search/>
        <div className='course-container columns padding-block-700'>
<Card/>
      </div>
      </div>
    </section>
  )
}

export default Courses