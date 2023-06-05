import React from 'react'

const Article = ({icon, paragraph , heading}) => {
  return (
    <div className='padding-block-500 values-content '>
      <div>
        <p className='  fw-bold padding-block-100 iconA' >{icon}</p>
        </div>
    <p className='fs-100 padding-block-100'>{heading}</p>
    <p className='fs-300'>{paragraph}</p>
</div>
  )
}

export default Article