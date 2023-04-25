import React from 'react'
import { Link } from 'react-router-dom'

const Resources = () => {
  return (
    <div className='padding-block-700'>
      <div className="container bg-primary-100">
        <div className="resources">
          <div className="sidebar">
            <Link to="/books">Books</Link>
            <Link to="/blogs">Blogs</Link>

            <Link to="/checksheets">  Cheetsheets</Link>
            <Link to="/website">  Websites</Link>
            <Link to="/books">Books</Link>
            <Link to="/books">Books</Link>
            <Link to="/books">Books</Link>
            <Link to="/books">Books</Link>


          </div>
          <div className="resource"></div>
        </div>
        <div className="columns"></div>
      </div>

    </div>
  )
}

export default Resources