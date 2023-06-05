import React from 'react'
import { RiArrowRightLine } from 'react-icons/ri'

const Subscribe = () => {
  return (
        <div className='container padding-block-900 '>
          <div className='flex subscribe '>
<p className='fs-secondary-heading'>Subscribe to our newsletter</p>

        <form className='padding-block-300 '>
          <input type='email' placeholder='Enter your email address'/>
          <button className='subscribe-button'>
            <RiArrowRightLine/></button>
        </form>
        
</div>
    </div>
  )
}

export default Subscribe