import React from 'react'
import image from "../images/10088.jpg";

const Landing = () => {
  return (
    <section className='  padding-block-900'>
      <div className='container'>
        <div className='columns flex'>
          <div className='flow'>
            <h2 className='fs-primary-heading fw-bold'>Learn new <span className='text-accent-400'>skills</span> with top online educators.</h2>
            <p className='' >The ideas of learning and teaching is useful in the circle of knowledge. </p>
            <div className='image-fluid   bg-accent-100 '>
           <img src={image}  alt="landing-photo" loading="eager"/>
           </div>
           <div className='flex'>
                <button className='button '>Get started</button>
                </div>
            </div>
           
           </div>
           </div>
           
    </section>
  )
}

export default Landing