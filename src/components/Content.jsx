import React from 'react'

const Content = ({number, content}) => {
  return (
    <div className='content '>
         <div className='flex content-paragraph'>
            <h4 className='fs-secondary-heading text-primary-400 fw-bold '>{number}</h4>
            <p className='fs-300 '>{content}</p>
            </div>
       
    </div>
  )
}

export default Content