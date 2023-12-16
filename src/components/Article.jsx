import React from 'react'

const Article = ({icon, paragraph , heading}) => {
  return (
    <div className='padding-block-300'>
        <p className='fs-300 fw-bold padding-block-100 iconStyle bg-accent-400 text-neutral-400' >{icon}</p>
    <p className='fs-100 padding-block-100'>{heading}</p>
    <p className='fs-300'>{paragraph}</p>
</div>
  )
}

export default Article