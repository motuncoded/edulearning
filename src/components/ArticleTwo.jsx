import React from 'react'

const ArticleTwo = ({header,heading, paragraph}) => {
  return (
    <div className='padding-block-700 '>
      <div className='' >
        <h3 className='fs-300  text-primary-400 '>{header}</h3>
        </div>
        <div className='padding-block-300 heading'>
<p className='fs-200 fw-bold'>{heading}</p>
<p className=' '>{paragraph}</p>
</div>
</div>
  )
}

export default ArticleTwo