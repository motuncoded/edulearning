import React, { useState, useRef, useEffect } from 'react'
import {NavLink, Link, useLocation} from "react-router-dom"
import { AiOutlineClose, AiOutlineMenu, AiTwotoneApi} from "react-icons/ai"
import { GiOpenBook } from 'react-icons/gi';
import {RiArrowDropDownLine, RiArrowDropUpLine} from "react-icons/ri"
import Dropdown from './Dropdown';
import { MenuItems } from "./MenuItem";


export const Navbar = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);


  const handleClick = () => setClick(!click);



  const [isOpen, setOpen] = useState(false);
  const Toggle = () =>{
    setOpen(!isOpen)
  }
  const toggleDrop = () =>{
    setDropdown(!dropdown)
  }
  
  const closeMobileMenu = () => setClick(false);
  
  return (
    <header className='navbar ' >
      <div className='logo '>
      <GiOpenBook className='icon-nav' size={25}/>

<NavLink >Edu<span>learning</span></NavLink>  
</div> 
  <nav className='primary-navigation'>
    <ul className={isOpen ? 'nav-wrapper active' : 'nav-wrapper'} >
         
              <li className='nav-item' > 
              
                <NavLink onClick={closeMobileMenu} className={({isActive})=> isActive ? "activeClass" : "inActiveClass"} to="/">Home</NavLink>
              </li>
              <li className='nav-item'  >
                <div>
                  <NavLink  onClick={closeMobileMenu} className={({isActive})=> isActive ? "activeClass " : "inActiveClass"} to="/resources">Resources
                </NavLink>
                <button className='dropdown-button'>
                {dropdown ? (<RiArrowDropUpLine onClick={toggleDrop} className='dropdown-icon'  size={25}    aria-haspopup="menu"/>)
            : (<RiArrowDropDownLine onClick={toggleDrop} size={25} className='dropdown-icon'  aria-haspopup="menu"/>) }</button>
</div>
                
            
                {dropdown && 
                  <ul className={click ? 'dropdown-menu active' : 'dropdown-menu'} onClick={handleClick} 
>
{MenuItems.map((item) => {
   return (
     <li key={item.id}>
       <Link
         to={item.path}
         className={({isActive})=> isActive ? "activeClass " : "inActiveClass"}  
                onClick={() => setClick(false)}
       >
         {item.title}
       </Link>
     </li>
   );
 })}
</ul>}  
              </li>
              
               <li className='nav-item'>
                <NavLink onClick={closeMobileMenu} className={({isActive})=> isActive ? "activeClass" : "inActiveClass"} to="/blog">Blog</NavLink>
              </li>
               <li className='nav-item' >
                <NavLink onClick={closeMobileMenu} className={({isActive})=> isActive ? "activeClass" : "inActiveClass"} to="/contact">Contact</NavLink>
              </li> 
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
