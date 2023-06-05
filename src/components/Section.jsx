import React from 'react'
import Article from './Article'
import { GrPersonalComputer } from "react-icons/gr"
import { GiArchiveRegister } from "react-icons/gi"
import { FaChalkboardTeacher, FaRegThumbsUp, FaRegUserCircle } from "react-icons/fa"
import { RiComputerFill } from 'react-icons/ri'
const Section = () => {
  return (
    <section className='padding-block-900 bg-neutral-900 text-neutral-100 '>
      <div className='container ' >
        <div className=' '>
      <div className='flex'>
        <p className=' fs-primary-heading '>We add values to our students.</p>
        </div>
        <div className='values '>
          <div className=' padding-block-500 '>
          <Article icon={<FaRegUserCircle/>} heading="Easy Registration" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" />
          <Article icon={<RiComputerFill/>} heading="Virtual Classes" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" />
          </div>
          <div className='padding-block-500 '>
          <Article  icon={<FaChalkboardTeacher/>} heading="Expert tutors" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam," />
         <Article  icon={<FaRegThumbsUp/>} heading="" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" />
         </div>
         </div>
        </div>
        </div>
    </section>
  )
}

export default Section