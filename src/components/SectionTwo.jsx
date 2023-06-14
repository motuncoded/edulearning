import React from 'react'
import community from "../images/community.png"

const SectionTwo = () => {
  return (
    <div className='padding-block-900 bg-neutral-900 text-neutral-100'>
      <div className='container  ' >
        <div className='columns '>
        <div className='image-fluid'>
          <img src={community} alt="community"/>
        </div>
        <div className='flex '>
        <p className=' fs-primary-heading '>Join our community.</p>
        <p className='padding-block-500 '>Studying online and meeting friends that can improve your skills. </p>
        <button className='secondary-button'>Join</button>

        </div>
        </div>
        </div>
    </div>
  )
}

export default SectionTwo