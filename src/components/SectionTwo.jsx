import React from 'react'
import Category from './Category'
import { BsCameraFill, BsCurrencyBitcoin, BsMusicNote, BsPenFill, BsPencil } from 'react-icons/bs'
import { FaChartLine, FaSuitcase } from 'react-icons/fa'
import { AiFillSetting } from 'react-icons/ai'
import { GrPersonalComputer } from 'react-icons/gr'
import { GiCook, GiCookingPot, GiFoodChain } from 'react-icons/gi'


const SectionTwo = () => {
  return (
    <div className='padding-block-700'>
      <div className="container">
        <div className=''>
              <h4 className='fw-bold fs-tertiary-heading category-title'>Explore by 
            category</h4>
        
          <div className="category padding-block-700">
               <Category icon={<BsPencil/>} heading="Art & Design" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" />
          <Category icon={<FaSuitcase/>} heading="Buinesss" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" />
          <Category  icon={<AiFillSetting/>} heading="Engineering" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam," />

          <Category  icon={<FaChartLine/>} heading="Data Science" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" />
          <Category  icon={<GrPersonalComputer/>} heading="Web development" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" />
          <Category  icon={<BsCurrencyBitcoin/>} heading="Blockchain" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" />
        
                      <Category  icon={<BsCameraFill/>} heading="Photography" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" />
          <Category  icon={<BsMusicNote/>} heading="Music" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" />
          <Category  icon={<BsPenFill/>} heading="Writing" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" />
          <Category  icon={<GiCook/>} heading="Cooking" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" />

          </div>
    

          
        </div>
      </div>
    </div>
  )
}

export default SectionTwo