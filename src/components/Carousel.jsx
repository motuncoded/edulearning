import React from 'react'
import { CarouselItem } from './CarouselItem'
import image from "../images/10088.jpg"

const Carousel = () => {
  return (
    <div className=' padding-block-900'>
      <div className='container'>
        <p className='fs-primary-heading '>What our clients are saying </p>
        <div className='carousel-wrapper  padding-block-500'>
            {CarouselItem.map((carousel)=>{
              return(
              <div key={carousel.id} className='carousel-container'>
                <h4>{carousel.heading}</h4>
                <p>{carousel.paragraph}</p>
                <div className='person  padding-block-500'>
                  <img src={image} alt="persons"/>
                  </div>
              </div>
              )
            })}
            </div>
        </div>
    </div>
  )
}

export default Carousel