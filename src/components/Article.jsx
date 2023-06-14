import React from 'react'

const Article = ({icon, paragraph , heading}) => {
  return (
    <div className='padding-block-700 values-content '>
      <div className='padding-block-200'>
        <p className='  fw-bold  iconA' >{icon}</p>
        </div>
    <p className='fs-100 padding-block-200'>{heading}</p>
    <p className='fs-300'>{paragraph}</p>
</div>
  )
}

export default Article