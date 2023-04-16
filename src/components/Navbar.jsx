import React, { useState } from 'react'
import {Link, useLocation} from "react-router-dom"
import {AiFillBook, AiOutlineClose, AiOutlineMenu, AiTwotoneApi} from "react-icons/ai"
import { GiOpenBook } from 'react-icons/gi';

export const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const Toggle = () =>{
    setOpen(!isOpen)
  }
    const location = useLocation(); 
  return (
    <header className='navbar container'>
      <div className='logo'>
<GiOpenBook className='icon-nav' size={20}/>
<h1 className='fs-700'>Edulearning</h1>  
</div> 
  <nav  className='primary-navigation'>
    <ul className={isOpen ? 'nav-wrapper active' : 'nav-wrapper'} >
       <li> <Link className={location.pathname === "/" ? "activeClass" : "inactiveClass" } to="/">Home</Link></li>
       <li> <Link className={location.pathname === "/courses" ? "activeClass" : "inactiveClass" } to="courses">Courses</Link></li>
        <li><Link className={location.pathname === "/services" ? "activeClass" : "inactiveClass" } to="services">Services</Link></li>
        <li><Link className={location.pathname === "/blog" ? "activeClass" : "inactiveClass" } to="blog">Blog</Link></li>
        <li><Link className={location.pathname === "/contact" ? "activeClass" : "inactiveClass" } to="contact">Contact</Link></li>
        </ul>
        <div className='toggle' onClick={Toggle}>
        {!isOpen ? <AiOutlineMenu style={{display: isOpen ? "block" : "none"}}/> : null}
				{!isOpen ? (
					<AiOutlineMenu size={22.5} className='icon'/>
				) : (
					<AiOutlineClose  size={22.5}className='icon' />
				)}
        </div>
        </nav>
     
        </header>
  )
}
