import React from 'react'
import image from "../images/landing-image.png";

const Landing = () => {
  return (
    <section className='landng  padding-block-900'>
      <div className='container'>
        <div className='columns flex'>
          <div className='flow'>
            <p className='fs-primary-heading fw-bold'>Learn new <span className='text-accent-400'>skills</span> with top online educators.</p>
            <p className='' >The ideas of learning and teaching is useful in the circle of knowledge. </p>
            <div className='image-fluid'>
           <img src={image}  alt="landing-photo"/>
           </div>
           <div className='flex'>
                <button className='button'>Get started</button>
                </div>
            </div>
           
           </div>
           </div>
           
    </section>
  )
}

export default Landing