import React from 'react'

const Landing = () => {
  return (
    <section className='  padding-block-900'>
      <div className='container'>
        <div className='columns flex'>
          <div className='flow flex'>
            <h2 className=' fw-bold'>Learn new <span className='text-accent-400'>skills</span> with top online educators.</h2>
            <p className='' >The ideas of learning and teaching is useful in the circle of knowledge. </p>
            <div className='image-fluid   bg-accent-100 '>
           <img src={("../assests/10088.jpg")}  alt="landing-photo" loading="eager"/>
           </div>
                <button className='button '>Get started</button>
            </div>
           
           </div>
           </div>
           
    </section>
  )
}

export default Landing