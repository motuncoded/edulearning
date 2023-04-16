import React from 'react'

const Landing = () => {
  return (
    <section className='padding-block-900'>
      <div className='container'>
        <div className='columns'>
          <div className='flow'>
            <h1 className='fs-primary-heading fw-bold w-500'>Learn new <span className='text-accent-400'>skills</span> with top online educators.</h1>
            <p >The ideas of learning and teaching is useful in the circle of knowledge. </p>
                <button className='button'>Get started</button>
            </div>
            <div className='image-fluid'>
           <img src={require("../assests/10088.jpg")}/>
           </div>
           </div>
           </div>
           
    </section>
  )
}

export default Landing