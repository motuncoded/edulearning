import React from 'react'

const Content = ({number, content}) => {
  return (
    <div className='content'>
         <div className='content-paragraph inline-flex'>
            <h4 className='fs-secondary-heading text-primary-400 fw-bold'>{number}</h4>
            <p className='fs-500 '>{content}</p>
            </div>
       
    </div>
  )
}

export default Content