import React from 'react'
import CarouselItem from './CarouselItem'
import { RiArrowLeftFill, RiArrowRightFill } from 'react-icons/ri'

const Carousel = () => {
  return (
    <div className=' padding-block-900'>
      <div className='container flex'>
        <p className='fs-primary-heading '>What our clients are saying </p>
        <div className='carousel-wrapper  padding-block-900'>
            {CarouselItem.map((carousel)=>{
              return(
              <div div key={carousel.id} className='carousel-container'>
                  <div className='person  padding-block-300'>
                    <figure className='img-area'>
                <img src={carousel.image} alt="persons"/>
                </figure>
                 

                  <p>{carousel.heading}</p>
</div>
                <blockquote>{carousel.paragraph}</blockquote>
              
               
              </div>
              
              )
            })}
          
            </div>
            <div>
              <button className='tertiary-button'><RiArrowLeftFill/></button>
              <button><RiArrowRightFill/></button>
            </div>
        </div>

    </div>
  )
}

export default Carousel