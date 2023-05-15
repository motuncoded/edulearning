import React, { useState, useRef, useEffect } from 'react'
import {Link, useLocation} from "react-router-dom"
import { AiOutlineClose, AiOutlineMenu, AiTwotoneApi} from "react-icons/ai"
import { GiOpenBook } from 'react-icons/gi';
import {RiArrowDropDownLine, RiArrowDropUpLine} from "react-icons/ri"
import menuItems from "../components/MenuItem.jsx"

export const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const Toggle = () =>{
    setOpen(!isOpen)
  }
  const [dropdown, setDropdown] = useState(false);
  const toggleDrop = () =>{
    setDropdown(!dropdown)
  }
    const location = useLocation(); 
  return (
    <header className='navbar '>
      <div className='logo '>
<GiOpenBook className='icon-nav' size={30}/>
<h1 className='fw-bold'>Edulearning</h1>  
</div> 
  <nav  className='primary-navigation '>
    <ul className={isOpen ? 'nav-wrapper active' : 'nav-wrapper'} >
       <li> <Link className={location.pathname === "/" ? "activeClass" : "inactiveClass" } to="/">Home</Link></li>
      
        <li><Link  className={location.pathname === "/resources" ? "activeClass inline-flex " : "inactiveClass " } to="resources">Resources </Link>    {dropdown ? (<RiArrowDropUpLine onClick={toggleDrop}  size={20}   aria-haspopup="menu"/>)
            : (<RiArrowDropDownLine size={20} onClick={toggleDrop}   aria-haspopup="menu"/>) }
          </li>
            {dropdown ? 
            (<ul className="dropdown">
            {menuItems.map((submenu, index) => (
              <li key={index} className="menu-items">
                <Link className={location.pathname === "/resources/courses" ? "activeClass" : "inactiveClass"} to={submenu.url}>{submenu.title}</Link>
              </li>
            ))}
          </ul>) : null}
        <li>
          <Link className={location.pathname === "/blog" ? "activeClass" : "inactiveClass" } to="blog">Blog</Link></li>
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
