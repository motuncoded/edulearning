import React from 'react'
import Article from './Article'
import { GrPersonalComputer } from "react-icons/gr"
import { GiArchiveRegister } from "react-icons/gi"
import { FaChalkboardTeacher, FaRegThumbsUp, FaRegUserCircle } from "react-icons/fa"
const Section = () => {
  return (
    <section className='padding-block-900 '>
      <div className='container ' >
        <div className=' '>
      <div className=''>
        <h4 className=' fw-bold fs-tertiary-heading '>We add values to our students journey</h4>
        </div>
        <div className='values padding-block-700'>
          <div>
          <Article icon={<FaRegUserCircle/>} heading="Easy Registration" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" />
          <Article icon={<GrPersonalComputer/>} heading="Online Classes" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" />
          </div>
          <div><Article  icon={<FaChalkboardTeacher/>} heading="Expert tutors" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam," />
         <Article  icon={<FaRegThumbsUp/>} heading="Expert tutors" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" />
         </div>
         </div>
        </div>
        </div>
    </section>
  )
}

export default Section