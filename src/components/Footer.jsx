import React from 'react'
import {Link, useLocation} from "react-router-dom";
import { GiOpenBook } from 'react-icons/gi';

const Footer = () => {
    const location = useLocation(); 

  return (
  
    <div className='padding-block-400'>
 <div  className='container footer'>
  <div className='columns'>
<div>
<GiOpenBook className='icon-nav' size={20}/>
  <ul role="list" aria-label='social link'>
    <li><a aria-label='facebook' href="#">Facebook</a></li>
    <li><a  aria-label='twitter' href="#">Twitter</a> </li>
    <li><a  aria-label='youtube' href="#">Youtube</a> </li>
    <li><a  aria-label='pinterest' href="#">Pinterest</a> </li>
    <li><a  aria-label='instragram' href="#">Instragram</a> </li>
  </ul>
</div>
<div>
  <nav className='footer-navigation'>
    <ul  aria-label="Footer" role="list" className='columns'>
       <li> <Link className={location.pathname === "/" ? "activeClass" : "inactiveClass" } to="/">Take a Tour</Link></li>
       <li> <Link className={location.pathname === "/courses" ? "activeClass" : "inactiveClass" } to="courses">Courses</Link></li>
        <li><Link className={location.pathname === "/services" ? "activeClass" : "inactiveClass" } to="services">Services</Link></li>
        <li><Link className={location.pathname === "/testimonial" ? "activeClass" : "inactiveClass" } to="testimonial">Testimonial</Link></li>
        <li><Link className={location.pathname === "/contact" ? "activeClass" : "inactiveClass" } to="contact">Contact</Link></li>
        </ul>
        </nav>
        </div>
        </div>
        <div>
          <form action="">
            <input type="email" name="" id="" />
            <button>Subscribe</button>
            <p>Copyright 2023. All rights Reserved  </p>
          </form>
      </div>
</div>
    </div>
  )
}

export default Footer