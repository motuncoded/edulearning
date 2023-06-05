import React from 'react'
import community from "../images/community.png"

const SectionTwo = () => {
  return (
    <div className='padding-block-900 bg-neutral-900 text-neutral-100'>
      <div className='container  ' >
        <div className='flex '>
      <div className=''>
        <p className=' fs-primary-heading '>Join our community.</p>
        
        </div>
        <div className='image-fluid'>
          <img src={community} alt="community"/>
        </div>
        <button className='secondary-button'>Join</button>
        </div>
        </div>
    </div>
  )
}

export default SectionTwo