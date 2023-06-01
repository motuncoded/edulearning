import React from 'react'

const Article = ({icon, paragraph , heading}) => {
  return (
    <div className='padding-block-300 '>
        <p className='  fw-bold padding-block-100 iconA' >{icon}</p>
    <p className='fs-100 padding-block-100'>{heading}</p>
    <p className='fs-300'>{paragraph}</p>
</div>
  )
}

export default Article