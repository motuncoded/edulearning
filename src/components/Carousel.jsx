import React, {useState, useEffect} from 'react';
import CarouselItem from './CarouselItem';
import {
	MdOutlineKeyboardArrowLeft,
	MdOutlineKeyboardArrowRight,
} from 'react-icons/md';
import { FaSlidersH } from 'react-icons/fa';

const Carousel = () => {
	// settind a state manangement for the caruosel


	return (
		<div className=' padding-block-900'>
			<div className='container flex'>
				<p className='fs-primary-heading '>What our clients are saying. </p>
				<div className='carousel-wrapper padding-block-700'>
					{CarouselItem.map((carousel) => {
						return (
							<div key={carousel.id} className="carousel-container">
								
                <div className='person  padding-block-300'>
                  <figure className='img-area'>
										<img src={carousel.image} alt='persons' />
									</figure>

									<p>{carousel.heading}</p>
								</div>
								<blockquote>{carousel.paragraph}</blockquote>
							</div>
						);
					})}
					
				</div>
			
			</div>
		</div>
	);
};

export default Carousel;
