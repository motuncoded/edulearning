import React, { useEffect, useState } from 'react'
import Search from '../components/Search';
import { Outlet } from 'react-router-dom';


function Courses() {
  const [courses, setCourses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPage, setpostPage] = useState(10)
  // get current page
  const indexOfLastPost = currentPage * postPage;
  const indexOfFirstPost = indexOfLastPost - postPage;
  const currentPost =  courses.slice(indexOfFirstPost, indexOfLastPost)

  
  return (
    <section className='container  padding-block-900'>
    <div className="">
        <Search/>
        <Outlet/>
      </div>
    </section>
  )
}

export default Courses