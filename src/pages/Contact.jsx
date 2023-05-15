import React from 'react';
import { AiFillMessage } from 'react-icons/ai';
import { FaClock, FaHome, FaPhone, FaTimes } from 'react-icons/fa';
import { GiPhone } from 'react-icons/gi';
import { GrMail, GrPhoneFlip, GrPhoneVertical } from 'react-icons/gr';

const Contact = () => {
	return (
    <section className='padding-block-900'>
    <div className='container'>
      <div className='columns contact'>
					<div className='contactSection'>
						<h4 className='fs-700 fw-bold padding-block-200'>Contact Us</h4>
						<p className='fs-400'>
							Feel free to contact us any time. We will get back to you as soon
							as possible.
						</p>
						<div className='columns'>
							<form className='padding-block-500'>
								<div className='form-flex'>
									<label>Name</label>
									<input type='email' name='' id='' />
								</div>
								<div className='form-flex'>
									<label>Email</label>
									<input type='email' name='' id='' />
								</div>
								<div className='form-flex'>
									<label>Message</label>
									<input type='email' name='' id='' />
								</div>
								<div className='send'>
									<button className='button'>Send</button>
								</div>
							</form>
						</div>
					</div>
					<div className=' infoSection bg-neutral-900'>
            <div className='infoFlex'>
						<p className=' fs-700 text-neutral-100 '>Info</p>
						
            </div>
							<div className='infoFlex text-secondary-100'>
								<GrMail size={20} className='fa-icon' />

								<p> edulearning@gmail.com</p>
							</div>
							<div className='infoFlex text-secondary-100'>
								<FaPhone size={20} className='fa-icon' />
								<p>+2348023232323</p>
							</div>
							<div className='infoFlex text-secondary-100'>
								<FaHome size={20} className='fa-icon ' />
								<p className=''>Yaba, Lagos</p>
							</div>
							<div className=' infoFlex text-secondary-100'>
								<FaClock size={20} className='fa-icon' />
								<p className=''>9:00am - 4:00pm</p>
						</div>
					</div>
          </div>
          </div>
           
    </section>
	);
};

export default Contact;
