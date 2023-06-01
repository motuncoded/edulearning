import React from 'react'
import {NavLink, useLocation,Link} from "react-router-dom";
import { GiOpenBook } from 'react-icons/gi';
import { AiFillFacebook, AiFillInstagram, AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai';
import { RiArrowRightLine, RiFacebookCircleFill, RiFacebookFill, RiFacebookLine, RiInstagramFill, RiInstagramLine, RiPinterestFill, RiPinterestLine, RiTwitterFill, RiTwitterLine, RiYoutubeFill, RiYoutubeLine } from 'react-icons/ri';

const Footer = () => {
    const location = useLocation(); 

  return (
  
    <footer className=' '>
 <div  className='container'>
  <div className='footer-container '>
    <div className='footer-wrapper'>
    <div className='footer-logo'>
      <GiOpenBook className='icon-nav' size={20}/>

<NavLink to="/" >Edu<span>learning</span></NavLink>  
</div> 
<ul role="list" className='social-link' aria-label='social link'>
    <li><a aria-label='facebook'  href="#"><RiFacebookFill size={25}/></a></li>
    <li><a  aria-label='twitter' href="#"><RiTwitterFill size={25}/></a> </li>
    <li><a  aria-label='youtube' href="#"><RiYoutubeFill size={25}/></a> </li>
    <li><a  aria-label='pinterest' href="#"><RiPinterestFill size={25}/></a> </li>
    <li><a  aria-label='instragram'href="#"><RiInstagramFill size={25}/></a> </li>
  </ul>


  </div>
  <div className='footer-nav'>
  <nav className='footer-navigation'>
    <ul className='footer-links' aria-label="Footer" role="list">
       <li className="fw-bold">Explore</li>
        <li><Link className={location.pathname === "/services" ? "" : "inactiveClass" } to="about">About</Link></li>
        <li><Link className={location.pathname === "/services" ? "" : "inactiveClass" } to="about">About</Link></li>
        <li><Link className={location.pathname === "/services" ? "" : "inactiveClass" } to="about">About</Link></li>
 <li><Link className={location.pathname === "/contact" ? "" : "inactiveClass" } to="contact">Contact</Link></li>
       
       
        </ul>
        </nav>
        </div>
<div className='footer-form'>
<p>Subscribe to our newsletter</p>

        <form>
          <input type='email' placeholder='Enter your email address'/>
          <button className='subscribe-button'><RiArrowRightLine/></button>
        </form>
        

        </div>
</div> 
        <p className='flex padding-block-500'>Copyright 2023. All Rights Reserved</p>

</div>  

</footer>  
    
  )
}

export default Footer