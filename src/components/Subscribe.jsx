import React from 'react'
import { RiArrowRightLine } from 'react-icons/ri'

const Subscribe = () => {
  return (
        <div className='container padding-block-900 '>
          <div className='flex subscribe '>
<p className='fs-secondary-heading'>Subscribe to our newsletter</p>

<div className='padding-block-500'>
        <form className='subscribe-container '>
          <input type='email' placeholder='Enter your email address'/>
          <button className='subscribe-button'>
            <RiArrowRightLine size={25}/></button>
        </form>
        </div>
</div>
    </div>
  )
}

export default Subscribe