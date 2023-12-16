import React from 'react'

const Category = ({icon, paragraph , heading}) => {
  return (
      <div className='padding-block-900 category-courses'>
        <p className=' fs-300 padding-block-200' >{icon}</p>
    <p className='fs-200 fw-bold padding-block-200'>{heading}</p>
    <p className='fs-100'>{paragraph}</p>   
    </div>
  )
}

export default Category